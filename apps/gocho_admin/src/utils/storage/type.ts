export type UserObjType = {
  accessExp: number;
  refreshExp: number;
  accessToken: string;
  refreshToken: string;
};

export type LocalStorageSetType = {
  USER: UserObjType;
};

type LocalStorageCommonKeys = keyof LocalStorageSetType;

export type LocalStorageGetType = {
  [K in LocalStorageCommonKeys]: K extends "USER" ? UserObjType : undefined;
};
