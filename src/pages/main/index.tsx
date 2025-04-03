import { AddRecordModal } from 'components/features/modal';
import { useState } from 'react';
import { RecordTable, TableHeader } from 'components/features';
import type { AddFormData } from 'types/FormData';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<AddFormData | null>(null);

  const openModal = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const openEditModal = (record: AddFormData) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <TableHeader onAddClick={openModal} />
      <RecordTable onEdit={openEditModal} />
      <AddRecordModal
        open={isModalOpen}
        onCancel={closeModal}
        defaultValues={editingRecord}
      />
    </>
  );
};

export default MainPage;
