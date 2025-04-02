import { Select as AntSelect, SelectProps } from 'antd';
import { css } from '@emotion/react';

const SELECT_OPTION = [
  { value: '개발자', label: '개발자' },
  { value: '디자이너', label: '디자이너' },
  { value: 'PO', label: 'PO' },
] as const;

type OptionValue = (typeof SELECT_OPTION)[number]['value'];

type CustomSelectProps = {
  onChange: (value: OptionValue) => void;
} & Omit<SelectProps, 'size' | 'options' | 'defaultValue'>;

const selectBaseStyle = css`
  .ant-select-selector {
    padding: 0 12px !important;
    color: #000000e0;
  }

  .ant-select-arrow {
    color: #000000e0;
  }

  &:hover .ant-select-selection-item,
  &:hover .ant-select-arrow {
    color: #4a7cfe !important;
    background-color: transparent;
  }
`;

const CustomSelect = ({ onChange }: CustomSelectProps) => {
  return (
    <AntSelect
      onChange={onChange}
      defaultValue={SELECT_OPTION[0].value}
      popupClassName="custom-dropdown"
      dropdownStyle={{
        width: 198,
        fontWeight: 400,
        fontSize: 14,
      }}
      options={SELECT_OPTION as unknown as { value: string; label: string }[]}
      css={selectBaseStyle}
    />
  );
};

export default CustomSelect;
