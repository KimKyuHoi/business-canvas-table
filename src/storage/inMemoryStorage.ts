type StorageMap<T = unknown> = Record<string, T>;

let memoryStorage: StorageMap = {};

export const inMemoryStorage = {
  getItem<T = unknown>(key: string): T | null {
    const value = memoryStorage[key];
    return (value ?? null) as T | null;
  },

  setItem<T = unknown>(key: string, value: T) {
    memoryStorage[key] = value;
  },

  removeItem: (key: string) => {
    delete memoryStorage[key];
  },

  clear: () => {
    memoryStorage = {};
  },
};
