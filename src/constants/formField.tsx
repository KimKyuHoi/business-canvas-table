import {
  CustomCheckBox,
  CustomDatePicker,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from 'components/common';
import { SELECT_OPTION } from 'types/SelectOption';

export const FORM_FIELDS = [
  {
    value: 'name',
    name: '이름',
    required: true,
    max: 20,
    component: <CustomInput placeholder="Input" />,
  },
  {
    value: 'address',
    name: '주소',
    required: false,
    max: 20,
    component: <CustomInput placeholder="Input" />,
  },
  {
    value: 'memo',
    name: '메모',
    required: false,
    max: 50,
    component: <CustomTextarea placeholder="Textarea" />,
  },
  {
    value: 'join_date',
    name: '가입일',
    required: true,
    component: <CustomDatePicker />,
  },
  {
    value: 'job',
    name: '직업',
    required: false,
    component: <CustomSelect options={[...SELECT_OPTION]} />,
  },
  {
    value: 'receive_email',
    name: '이메일 수신 동의',
    required: false,
    component: <CustomCheckBox />,
  },
];
