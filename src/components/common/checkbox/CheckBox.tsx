import { Checkbox as AntCheckBox, CheckboxProps } from 'antd';
import { css } from '@emotion/react';

type CustomCheckBoxProps = {
  disabled?: CheckboxProps['disabled'];
};

const CustomCheckBox = ({ disabled }: CustomCheckBoxProps) => {
  return (
    <AntCheckBox
      disabled={disabled}
      css={css`
        border-radius: 6px;
      `}
    />
  );
};

export default CustomCheckBox;
