import { css } from '@emotion/react';
import { Button as AntButton } from 'antd';
import { ReactNode } from 'react';

type CustomButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  color?: 'primary' | 'default';
  variant?: 'solid' | 'text';
  disabled?: boolean;
} & React.ComponentProps<typeof AntButton>;

const CustomButton = ({
  children,
  icon,
  color = 'primary',
  variant = 'solid',
  disabled,
  ...rest
}: CustomButtonProps) => {
  return (
    <AntButton
      type="text"
      icon={icon}
      color={color}
      variant={variant}
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
