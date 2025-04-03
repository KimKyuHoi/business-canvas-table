import { localStorageStorage } from './localStorage';
import { inMemoryStorage } from './inMemoryStorage';

const storageType = import.meta.env.VITE_STORAGE;

export const storage =
  storageType === 'local-storage' ? localStorageStorage : inMemoryStorage;
