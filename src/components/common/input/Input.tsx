import { Input as AntInput } from 'antd';
import { ChangeEvent } from 'react';
import type { InputProps } from 'antd';
import { css } from '@emotion/react';

type CustomInputProps = {
  placeholder: string;
  status?: 'error';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputProps, 'size'>;

const CustomInput = ({
  placeholder,
  status,
  onChange,
  ...rest
}: CustomInputProps) => {
  return (
    <AntInput
      placeholder={placeholder}
      status={status}
      onChange={onChange}
      css={css`
        border-radius: 8px;
        padding: 0px 12px;
        height: 32px;
      `}
      {...rest}
    />
  );
};

export default CustomInput;
