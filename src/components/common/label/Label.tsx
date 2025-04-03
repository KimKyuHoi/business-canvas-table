import { css } from '@emotion/react';

type LabelProps = {
  label: string;
  required?: boolean;
  htmlFor?: string;
};

const CustomLabel = ({ label, required = false, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      css={css`
        display: flex;
        align-items: center;
        height: 40px;
        font-size: 16px;
        font-weight: 600;
        color: #00000073;
      `}
    >
      {label}
      {required && (
        <span
          css={css`
            color: #ff4d4f;
            margin-left: 4px;
          `}
        >
          *
        </span>
      )}
    </label>
  );
};

export default CustomLabel;
