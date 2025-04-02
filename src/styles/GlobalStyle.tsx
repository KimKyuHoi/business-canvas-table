import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      .custom-dropdown .ant-select-item-option-selected {
        color: #4a7cfe !important;
        font-weight: 400 !important;
      }

      .custom-dropdown .ant-select-item-option-active {
        background-color: #0000000a !important;
        color: #000000e0 !important;
      }
    `}
  />
);

export default GlobalStyle;
