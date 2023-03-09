import {
  sharedAllLocalStorageItem,
  sharedClearLocalStorageItem,
  sharedGetLocalStorageItem,
  sharedRemoveLocalStorage,
  sharedSetLocalStorageItem,
} from "shared-util";
import { LocalStorageGetType, LocalStorageSetType } from "./type";

export const userGetLocalStoargetItem = <T extends keyof LocalStorageGetType>(
  key: T
): LocalStorageGetType[T] | undefined => {
  return sharedGetLocalStorageItem(key);
};

export const userSetLocalStorageItem = <T extends keyof LocalStorageSetType>(key: T, value: LocalStorageSetType[T]) => {
  sharedSetLocalStorageItem({ key, value });
};

export const userResetLocalStorageItem = <T extends keyof LocalStorageSetType>(key: T) => {
  sharedRemoveLocalStorage(key);
};

export const userClearLocalStorageItem = () => {
  sharedClearLocalStorageItem();
};

export const userAllLocalStorageItem = () => {
  return sharedAllLocalStorageItem();
};
