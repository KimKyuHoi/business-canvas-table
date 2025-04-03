import type { TableColumnsType } from 'antd';
import {
  CustomCheckBox,
  CustomDropdown,
  CustomTableFilter,
} from 'components/common';
import type { DataType } from 'types/FormData';
import { getFilterOptions } from 'utils/filter';

type TableColumnProps = {
  records: DataType[];
  selectedRowKeys: React.Key[];
  onEdit: (record: DataType) => void;
  handleDelete: (key: string | number) => void;
};

export const RecordTableColumns = ({
  records,
  selectedRowKeys,
  onEdit,
  handleDelete,
}: TableColumnProps): TableColumnsType<DataType> => {
  return [
    {
      title: '이름',
      dataIndex: 'name',
      width: 120,
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={getFilterOptions(records, 'name')}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.name === value,
    },
    {
      title: '주소',
      dataIndex: 'address',
      width: 249,
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={getFilterOptions(records, 'address')}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.address === value,
    },
    {
      title: '메모',
      dataIndex: 'memo',
      width: 249,
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={getFilterOptions(records, 'memo')}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.memo === value,
    },
    {
      title: '가입일',
      dataIndex: 'join_date',
      width: 200,
      render: (date: string) => date || '-',
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={getFilterOptions(records, 'join_date')}
          selectedKeys={selectedKeys as string[]}
          onChange={(keys) => {
            setSelectedKeys(keys);
            confirm();
          }}
        />
      ),
      onFilter: (value, record) => record.join_date === value,
    },
    {
      title: '직업',
      dataIndex: 'job',
      width: 249,
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => (
        <CustomTableFilter
          options={getFilterOptions(records, 'job')}
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
              onClick: () => onEdit(record),
            },
            {
              key: 'delete',
              label: '삭제',
              danger: true,
              onClick: () => handleDelete(record.key),
            },
          ]}
        />
      ),
    },
  ];
};
