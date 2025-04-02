import { Select as AntSelect, SelectProps } from 'antd';
import { css } from '@emotion/react';
import { OptionValue } from 'types/SelectOption';

type CustomSelectProps = {
  options: { value: OptionValue; label: string }[];
} & Omit<SelectProps, 'size' | 'defaultValue' | 'options'>;

const selectBaseStyle = css`
  width: auto !important;

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

const CustomSelect = ({ options, ...rest }: CustomSelectProps) => {
  return (
    <AntSelect
      options={options}
      popupClassName="custom-dropdown"
      dropdownStyle={{
        width: 198,
        fontWeight: 400,
        fontSize: 14,
      }}
      css={selectBaseStyle}
      {...rest}
    />
  );
};

export default CustomSelect;
