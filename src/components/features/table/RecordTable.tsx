import { Table } from 'antd';
import type { TableProps } from 'antd';
import type { DataType } from 'types/FormData';
import { css } from '@emotion/react';
import { useRecordTable } from 'hooks/table';
import { RecordTableColumns } from './RecordTableColumns';

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection'];

type RecordTableProps = {
  records: DataType[];
  setRecords: React.Dispatch<React.SetStateAction<DataType[]>>;
  onEdit: (record: DataType) => void;
};

const RecordTable = ({ records, setRecords, onEdit }: RecordTableProps) => {
  const { selectedRowKeys, onSelectChange, handleDelete } = useRecordTable(
    setRecords,
    onEdit
  );

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  const columns = RecordTableColumns({
    records,
    selectedRowKeys,
    onEdit,
    handleDelete,
  });

  return (
    <Table<DataType>
      rowSelection={rowSelection}
      columns={columns}
      dataSource={records}
      pagination={false}
      css={css`
        .ant-table-cell {
          padding: 8px !important;
          border-bottom: 1px solid #0000000f;
        }

        .ant-table-thead > tr > th {
          font-weight: 600;
          font-size: 14px;
          padding: 8px 0px !important;
          color: #000000e0;
          border-bottom: 1px solid #0000000f;
        }

        .ant-table-filter-column {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 8px;
          height: 22px;
        }

        .ant-table-filter-column .ant-table-filter-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px;
          font-size: 14px;
        }

        .ant-table-tbody > tr > td:first-of-type {
          border-right: 1px solid #0000000f;
        }

        .ant-table-tbody > tr > td {
          background-color: #fff;
        }
      `}
    />
  );
};

export default RecordTable;
