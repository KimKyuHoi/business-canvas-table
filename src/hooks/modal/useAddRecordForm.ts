import { Form } from 'antd';
import { useEffect, useMemo } from 'react';
import { FORM_FIELDS } from 'constants/formField';
import { AddFormData } from 'types/FormData';
import dayjs from 'dayjs';
import type { AddFormDataWithDayjs } from 'types/FormData';

export const useAddRecordForm = (
  onSuccess: (data: AddFormData) => void,
  defaultValues?: AddFormData | null
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
      const patchedValues: AddFormDataWithDayjs = {
        ...defaultValues,

        join_date: defaultValues.join_date
          ? dayjs(defaultValues.join_date)
          : undefined,
      };
      form.setFieldsValue(patchedValues);
    } else {
      form.resetFields();
    }
  }, [defaultValues, form]);

  const handleSubmit = async () => {
    try {
      const parsedValues: AddFormData = {
        ...values,
        join_date: dayjs(values.join_date).format('YYYY-MM-DD'),
      };

      onSuccess(parsedValues);
    } catch (e) {
      console.log('Validation Failed', e);
    }
  };

  return { form, isDisabled, handleSubmit };
};
