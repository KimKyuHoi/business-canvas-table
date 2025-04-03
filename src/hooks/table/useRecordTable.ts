import { useState } from 'react';
import { deleteRecord, getRecords } from 'utils/storage/recordStorage';
import type { DataType } from 'types/FormData';

export function useRecordTable(
  setRecords: React.Dispatch<React.SetStateAction<DataType[]>>,
  onEdit: (record: DataType) => void
) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDelete = (key: string | number) => {
    deleteRecord(key);
    setRecords(getRecords());
  };

  return {
    selectedRowKeys,
    onSelectChange,
    handleDelete,
    onEdit,
  };
}
