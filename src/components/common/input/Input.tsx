import { Input as AntInput } from 'antd';
import { ChangeEvent } from 'react';
import type { InputProps } from 'antd';

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
      {...rest}
    />
  );
};

export default CustomInput;
