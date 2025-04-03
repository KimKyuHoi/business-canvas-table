import { Form } from 'antd';
import { useEffect, useMemo } from 'react';
import { FORM_FIELDS } from 'constants/formField';
import dayjs from 'dayjs';
import type {
  AddFormData,
  AddFormDataWithDayjs,
  DataType,
} from 'types/FormData';

export const useAddRecordForm = (
  onSuccess: (data: AddFormDataWithDayjs) => void,
  defaultValues?: DataType | null
) => {
  const [form] = Form.useForm<AddFormDataWithDayjs>();

  const requiredFields = useMemo(
    () =>
      FORM_FIELDS.filter((f) => f.required).map(
        (f) => f.value as keyof AddFormData
      ),
    []
  );

  const values = Form.useWatch([], form);

  const isDisabled = useMemo(() => {
    if (!values) return true;
    return requiredFields.some((field) => !values[field]);
  }, [values, requiredFields]);

  useEffect(() => {
    if (defaultValues) {
      form.setFieldsValue({
        ...defaultValues,
        join_date: dayjs(defaultValues.join_date),
      });
    } else {
      form.resetFields();
    }
  }, [defaultValues, form]);

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
