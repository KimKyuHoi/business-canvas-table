import { css } from '@emotion/react';

type LabelProps = {
  label: string;
  required?: boolean;
};

const CustomLabel = ({ label, required = false }: LabelProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 40px;
      `}
    >
      <span
        css={css`
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
              font-size: 16px;
            `}
          >
            *
          </span>
        )}
      </span>
    </div>
  );
};

export default CustomLabel;
