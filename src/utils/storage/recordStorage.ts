import { storage } from './storage';
import { AddFormData, DataType } from 'types/FormData';
import { INITIAL_DATA } from 'constants/initialData';

const STORAGE_KEY = 'record-list';

export function getRecords(): DataType[] {
  const existing = storage.getItem<DataType[]>(STORAGE_KEY);
  if (!existing || existing.length === 0) {
    const initialWithKeys = INITIAL_DATA.map((item, idx) => ({
      ...item,
      key: idx + 1,
    }));
    storage.setItem(STORAGE_KEY, initialWithKeys);
    return initialWithKeys;
  }
  return existing;
}

export function addRecord(newRecord: AddFormData): void {
  const records = getRecords();
  const nextKey = Math.max(0, ...records.map((r) => Number(r.key ?? 0))) + 1;
  records.push({ ...newRecord, key: nextKey });
  storage.setItem(STORAGE_KEY, records);
}

export function updateRecord(key: string | number, updated: AddFormData): void {
  const records = getRecords();
  const updatedRecords = records.map((r) =>
    r.key === key ? { ...updated, key } : r
  );
  storage.setItem(STORAGE_KEY, updatedRecords);
}

export function deleteRecord(key: string | number): void {
  const records = getRecords();
  const filtered = records.filter((r) => r.key !== key);
  storage.setItem(STORAGE_KEY, filtered);
}

export function clearRecords(): void {
  storage.removeItem(STORAGE_KEY);
}
