import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {
  CustomCheckBox,
  CustomDropdown,
  CustomTableFilter,
} from 'components/common';
import { useState } from 'react';
import type { AddFormData } from 'types/FormData';

import { css } from '@emotion/react';

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection'];

type DataType = AddFormData & { key: string | number };

const DATA_SOURCE = [
  {
    key: 1,
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    join_date: '2024-10-02',
    job: '개발자',
    receive_email: true,
  },
  {
    key: 2,
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    join_date: '2024-10-01',
    job: 'PO',
    receive_email: false,
  },
];

type RecordTableProps = {
  onEdit: (record: DataType) => void;
};

const RecordTable = ({ onEdit }: RecordTableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: '이름',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '주소',
      dataIndex: 'address',
      width: 249,
    },
    {
      title: '메모',
      dataIndex: 'memo',
      width: 249,
    },
    {
      title: '가입일',
      dataIndex: 'join_date',
      width: 200,
      render: (date: string) => date || '-',
    },
    {
      title: '직업',
      dataIndex: 'job',
      width: 249,
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={[
            { label: '개발자', value: '개발자' },
            { label: 'PO', value: 'PO' },
            { label: '디자이너', value: '디자이너' },
          ]}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.job === value,
    },
    {
      title: '이메일 수신 동의',
      dataIndex: 'receive_email',
      width: 150,
      render: (checked: boolean) => <CustomCheckBox checked={checked} />,

      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={[
            { label: '수신함', value: 'true' },
            { label: '수신안함', value: 'false' },
          ]}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.receive_email === (value === 'true'),
    },
    {
      title: '',
      key: 'action',
      width: 48,
      render: (_, record) => (
        <CustomDropdown
          record={record}
          disabled={!selectedRowKeys.includes(record.key)}
          actions={[
            {
              key: 'edit',
              label: '수정',
              onClick: (rec) => onEdit(rec),
            },
            {
              key: 'delete',
              label: '삭제',
              danger: true,
              onClick: (rec) => console.log('Delete', rec),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Table<DataType>
      rowSelection={rowSelection}
      columns={columns}
      dataSource={DATA_SOURCE}
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
