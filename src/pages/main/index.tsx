import { useState } from 'react';
import { RecordTable, TableHeader } from 'components/features';
import { AddRecordModal } from 'components/features/modal';
import { getRecords } from 'utils/storage/recordStorage';
import type { DataType } from 'types/FormData';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<DataType | null>(null);
  const [records, setRecords] = useState<DataType[]>(getRecords());

  const openModal = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const openEditModal = (record: DataType) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    setRecords(getRecords());
    setIsModalOpen(false);
  };

  return (
    <>
      <TableHeader onAddClick={openModal} />
      <RecordTable
        onEdit={openEditModal}
        records={records}
        setRecords={setRecords}
      />
      <AddRecordModal
        open={isModalOpen}
        onCancel={closeModal}
        onSubmit={handleSubmit}
        defaultValues={editingRecord}
      />
    </>
  );
};

export default MainPage;
