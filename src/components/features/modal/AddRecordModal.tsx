import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal, ModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { CustomButton } from 'components/common';

import AddRecordForm from './AddRecordForm';

import { useAddRecordForm } from 'hooks/modal';

import type { AddFormData } from 'types/FormData';

type AddRecordModalProps = Pick<ModalProps, 'open' | 'onCancel'> & {
  defaultValues?: AddFormData | null;
};

const AddRecordModal = ({
  onCancel,
  open,
  defaultValues,
}: AddRecordModalProps) => {
  const { form, isDisabled, handleSubmit } = useAddRecordForm((values) => {
    console.log('valueData', values);
  }, defaultValues);

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
              {defaultValues ? '저장' : '추가'}
            </CustomButton>
          </div>
        </ModalFooter>
      }
    >
      <ModalHeader>
        <div>{defaultValues ? '회원 수정' : '회원 추가'}</div>
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
