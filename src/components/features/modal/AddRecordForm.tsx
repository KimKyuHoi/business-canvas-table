import { css } from '@emotion/react';
import { Form, FormInstance } from 'antd';
import {
  CustomCheckBox,
  CustomDatePicker,
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomTextarea,
} from 'components/common';
import { AddFormData } from 'types/FormData';
import { SELECT_OPTION } from 'types/SelectOption';

type AddRecordFormProps = {
  form: FormInstance<AddFormData>;
};

const FORM_FIELDS = [
  {
    value: 'name',
    name: '이름',
    required: true,
    max: 20,
    component: <CustomInput placeholder="Input" />,
  },
  {
    value: 'address',
    name: '주소',
    required: false,
    max: 20,
    component: <CustomInput placeholder="Input" />,
  },
  {
    value: 'memo',
    name: '메모',
    required: false,
    max: 50,
    component: <CustomTextarea placeholder="Textarea" />,
  },
  {
    value: 'join_date',
    name: '가입일',
    required: true,
    component: <CustomDatePicker />,
  },
  {
    value: 'job',
    name: '직업',
    required: false,
    component: <CustomSelect options={[...SELECT_OPTION]} />,
  },
  {
    value: 'receive_email',
    name: '이메일 수신 동의',
    required: false,
    component: <CustomCheckBox />,
  },
];

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
          직업: SELECT_OPTION[0].value,
          이메일_수신_동의: false,
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
            name={name}
            required={false}
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
