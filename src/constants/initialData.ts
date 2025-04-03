import { DataType } from 'types/FormData';

export const INITIAL_DATA: Omit<DataType, 'key'>[] = [
  {
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    join_date: '2024-10-02',
    job: '개발자',
    receive_email: true,
  },
  {
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    join_date: '2024-10-01',
    job: 'PO',
    receive_email: false,
  },
];
