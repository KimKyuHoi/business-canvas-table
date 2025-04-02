import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';
import { css } from '@emotion/react';

type CustomDataPickerProps = {
  onChange?: DatePickerProps['onChange'];
};

const CustomDatePicker = ({ onChange, ...rest }: CustomDataPickerProps) => {
  return (
    <AntDatePicker
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

export default CustomDatePicker;
