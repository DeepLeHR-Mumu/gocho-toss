export interface UserStatusZustandlProps {
  currentUserStatus: {
    accessToken: null | string;
    accessExp: null | number;
    refreshToken: null | string;
    refreshExp: null | number;
  };
  setUserStatus: (status: {
    accessToken: string | null;
    accessExp: number | null;
    refreshToken: string | null;
    refreshExp: number | null;
  }) => void;
}

export interface UserStatusObjType {
  accessToken: null | string;
  accessExp: null | number;
  refreshToken: null | string;
  refreshExp: null | number;
}
