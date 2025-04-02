import { Checkbox as AntCheckBox, CheckboxProps } from 'antd';
import { css } from '@emotion/react';

type CustomCheckBoxProps = {
  onChange: CheckboxProps['onChange'];
  disabled?: CheckboxProps['disabled'];
};

const CustomCheckBox = ({ onChange, disabled }: CustomCheckBoxProps) => {
  return (
    <AntCheckBox
      onChange={onChange}
      disabled={disabled}
      css={css`
        border-radius: 6px;
      `}
    />
  );
};

export default CustomCheckBox;
