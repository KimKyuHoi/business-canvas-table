import dayjs from 'dayjs';

export interface AddFormData {
  name: string;
  address: string;
  memo: string;
  join_date: string;
  job: string;
  receive_email: boolean;
}

export type AddFormDataWithDayjs = Omit<AddFormData, 'join_date'> & {
  join_date?: dayjs.Dayjs;
};
