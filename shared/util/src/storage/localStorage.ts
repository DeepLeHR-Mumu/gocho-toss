export const sharedRemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const sharedSetLocalStorageItem = ({ key, value }: { key: string; value: unknown }) => {
  const serializedData = JSON.stringify(value);
  localStorage.setItem(key, serializedData);
};

export const sharedGetLocalStorageItem = (key: string) => {
  const getData = localStorage.getItem(key);
  if (getData === null) return undefined;

  try {
    return JSON.parse(getData);
  } catch {
    if (getData.match(/[[\]{}]/g)) {
      // eslint-disable-next-line no-console
      console.error(`sharedGetLocalStorageItem - malforemd JSON - ${key}`);
      localStorage.removeItem(key);
      return undefined;
    }
    return getData;
  }
};

export const sharedClearLocalStorageItem = () => {
  localStorage.clear();
};

export const sharedAllLocalStorageItem = () => {
  return { ...localStorage };
};
