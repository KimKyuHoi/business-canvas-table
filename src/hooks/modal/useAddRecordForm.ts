import { Form } from 'antd';
import { FORM_FIELDS } from 'constants/formField';
import { useMemo } from 'react';
import { AddFormData } from 'types/FormData';

export const useAddRecordForm = (onSuccess: (data: AddFormData) => void) => {
  const [form] = Form.useForm<AddFormData>();

  const requiredFields = FORM_FIELDS.filter((f) => f.required).map(
    (f) => f.value as keyof AddFormData
  );

  const values = Form.useWatch([], form);

  const isDisabled = useMemo(() => {
    if (!values) return true;
    return requiredFields.some((field) => !values[field]);
  }, [values, requiredFields]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSuccess(values);
    } catch (e) {
      console.log('Validation Failed', e);
    }
  };

  return { form, isDisabled, handleSubmit };
};
