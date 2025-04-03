import { Checkbox as AntCheckBox, CheckboxProps } from 'antd';
import { css } from '@emotion/react';

type CustomCheckBoxProps = CheckboxProps;

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  return (
    <AntCheckBox
      {...props}
      css={css`
        border-radius: 6px;
      `}
    />
  );
};

export default CustomCheckBox;
