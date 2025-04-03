import { DataType } from 'types/FormData';

export function getFilterOptions(list: DataType[], key: keyof DataType) {
  const unique = [...new Set(list.map((item) => item[key]))];
  return unique.map((value) => ({
    label: String(value),
    value: String(value),
  }));
}
