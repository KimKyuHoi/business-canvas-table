import { Dropdown, Divider } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { CustomButton } from 'components/common';

type DropdownAction<T> = {
  key: string;
  label: string;
  danger?: boolean;
  onClick: (record: T) => void;
};

type CustomDropdownProps<T> = {
  record: T;
  actions: DropdownAction<T>[];
  disabled?: boolean;
};

const CustomDropdown = <T extends object>({
  record,
  actions,
  disabled = false,
  ...rest
}: CustomDropdownProps<T>) => {
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      dropdownRender={() =>
        !disabled && (
          <div
            css={css`
              width: 181px;
              background: #fff;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
              padding: 4px;
            `}
          >
            {actions.map((action, index) => (
              <div key={action.key}>
                <div
                  css={css`
                    font-size: 14px;
                    font-weight: 400;
                    height: 32px;
                    width: 100%;
                    padding: 5px 12px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: ${action.danger ? '#ff4d4f' : 'inherit'};

                    &:hover {
                      background-color: #f5f5f5;
                    }
                  `}
                  onClick={() => action.onClick(record)}
                >
                  {action.label}
                </div>

                {index < actions.length - 1 && (
                  <Divider
                    style={{
                      margin: '4px 0',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )
      }
      disabled={disabled}
      {...rest}
    >
      <CustomButton
        type="text"
        icon={<MoreOutlined />}
        disabled={disabled} // ✅ 버튼도 비활성화 처리
      />
    </Dropdown>
  );
};

export default CustomDropdown;
