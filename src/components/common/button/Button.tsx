import { css } from '@emotion/react';
import { Button as AntButton } from 'antd';
import { ReactNode } from 'react';

type CustomButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  type?: 'primary' | 'text';
  disabled?: boolean;
} & React.ComponentProps<typeof AntButton>;

const CustomButton = ({
  children,
  icon,
  type,
  disabled,
  ...rest
}: CustomButtonProps) => {
  return (
    <AntButton
      icon={icon}
      type={type}
      disabled={disabled}
      css={css`
        padding: 0 12px;
        border-radius: 8px;
        box-shadow: none;
      `}
      {...rest}
    >
      {children}
    </AntButton>
  );
};

export default CustomButton;
