import { Checkbox as AntCheckBox, CheckboxProps } from 'antd';
import { css } from '@emotion/react';

type CustomCheckBoxProps = CheckboxProps;

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  return (
    <AntCheckBox
      {...props}
      css={css`
        border-radius: 6px;

        :where(.ant-checkbox-wrapper) > span:last-of-type {
          margin-left: 8px;
          padding: 0px;
        }
      `}
    />
  );
};

export default CustomCheckBox;
