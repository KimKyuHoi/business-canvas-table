import { Select as AntSelect, SelectProps } from 'antd';
import { css } from '@emotion/react';
import { OptionValue } from 'types/SelectOption';

type CustomSelectProps = {
  defaultValue: OptionValue;
  options: { value: OptionValue; label: string }[];
  onChange: (value: OptionValue) => void;
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

const CustomSelect = ({
  onChange,
  options,
  defaultValue,
  ...rest
}: CustomSelectProps) => {
  return (
    <AntSelect
      onChange={onChange}
      defaultValue={defaultValue}
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
