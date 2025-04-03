import { css } from '@emotion/react';
import { Form, FormInstance } from 'antd';
import { CustomLabel } from 'components/common';
import { SELECT_OPTION } from 'types/SelectOption';
import { FORM_FIELDS } from 'constants/formField';
import type { AddFormDataWithDayjs } from 'types/FormData';

type AddRecordFormProps = {
  form: FormInstance<AddFormDataWithDayjs>;
};

const AddRecordForm = ({ form }: AddRecordFormProps) => {
  return (
    <div
      css={css`
        padding: 0 24px;
      `}
    >
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        initialValues={{
          job: SELECT_OPTION[0].value,
          receive_email: false,
        }}
        css={css`
          margin-top: 10px;
          .ant-form-item-label {
            padding: 0 !important;
          }
        `}
      >
        {FORM_FIELDS.map(({ value, name, required, max, component }) => (
          <Form.Item
            key={value}
            label={<CustomLabel label={name} required={required} />}
            name={value}
            required={false}
            valuePropName={value === 'receive_email' ? 'checked' : 'value'}
            rules={[
              ...(required
                ? [{ required: true, message: `${name}을(를) 입력해주세요.` }]
                : []),
              ...(max
                ? [{ max, message: `글자수 ${max}을 초과할 수 없습니다.` }]
                : []),
            ]}
          >
            {component}
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default AddRecordForm;
