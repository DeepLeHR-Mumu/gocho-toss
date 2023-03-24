export const sharedRemoveSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const sharedSetSessionStorageItem = ({ key, value }: { key: string; value: unknown }) => {
  const serializedData = JSON.stringify(value);
  sessionStorage.setItem(key, serializedData);
};

export const sharedGetSessionStorageItem = (key: string) => {
  const getData = sessionStorage.getItem(key);
  if (getData === null) return undefined;

  try {
    return JSON.parse(getData);
  } catch {
    if (getData.match(/[[\]{}]/g)) {
      // eslint-disable-next-line no-console
      console.error(`sharedGetSessionStorageItem - malforemd JSON - ${key}`);
      sessionStorage.removeItem(key);
      return undefined;
    }
    return getData;
  }
};

export const sharedClearSessionStorageItem = () => {
  sessionStorage.clear();
};

export const sharedAllSessionStorageItem = () => {
  return { ...sessionStorage };
};
