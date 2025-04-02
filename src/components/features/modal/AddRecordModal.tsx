import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Form, Modal, ModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { CustomButton } from 'components/common';
import { AddFormData } from 'types/FormData';

import AddRecordForm from './AddRecordForm';
import { FORM_FIELDS } from 'constants/formField';
import { useMemo } from 'react';

type AddRecordModalProps = Pick<ModalProps, 'open' | 'onCancel'>;

const AddRecordModal = ({ onCancel, open }: AddRecordModalProps) => {
  const [form] = Form.useForm<AddFormData>();

  const REQUIRED_FIELDS: (keyof AddFormData)[] = FORM_FIELDS.filter(
    (f) => f.required
  ).map((f) => f.value as keyof AddFormData);

  const values = Form.useWatch([], form);

  const isDisabled = useMemo(() => {
    if (!values) return true;
    return REQUIRED_FIELDS.some((field) => !values[field]);
  }, [values, REQUIRED_FIELDS]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('제출 데이터:', JSON.stringify(values, null, 2));
    } catch (e) {
      console.log('❌ Validation Failed', e);
    }
  };

  return (
    <Modal
      title={null}
      css={css`
        .ant-modal-content {
          padding: 0px;
        }
        .ant-modal-footer {
          margin-top: 0px !important;
        }

        .ant-form-item {
          margin-bottom: 20px !important;
        }
      `}
      open={open}
      onCancel={onCancel}
      closable={false}
      footer={
        <ModalFooter>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              gap: 8px;
            `}
          >
            <CustomButton onClick={onCancel}>취소</CustomButton>
            <CustomButton
              key="submit"
              type="primary"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              저장
            </CustomButton>
          </div>
        </ModalFooter>
      }
    >
      <ModalHeader>
        <div>회원 추가</div>
        <CloseOutlined onClick={onCancel} />
      </ModalHeader>
      <AddRecordForm form={form} />
    </Modal>
  );
};

export default AddRecordModal;

const ModalHeader = styled.header`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalFooter = styled.footer`
  background-color: #00000005;
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
  height: 56px;
`;
