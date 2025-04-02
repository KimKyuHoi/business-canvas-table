import { Input as AntInput } from 'antd';
import type { ChangeEvent } from 'react';
import type { TextAreaProps } from 'antd/es/input';
import { css } from '@emotion/react';

const { TextArea } = AntInput;

type CustomTextareaProps = {
  placeholder: string;
  status?: 'error';
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & Omit<TextAreaProps, 'size'>;

const CustomTextarea = ({
  placeholder,
  status,
  onChange,
  ...rest
}: CustomTextareaProps) => {
  return (
    <TextArea
      placeholder={placeholder}
      size="large"
      status={status}
      onChange={onChange}
      css={css`
        height: 64px;
        padding: 5px 12px;
        border-radius: 10px;
      `}
      {...rest}
    />
  );
};

export default CustomTextarea;
