import create from "zustand";

import { UserStatusZustandlProps, UserStatusObjType } from "./type";

const userStatusZustand = create<UserStatusZustandlProps>((set) => ({
  currentUserStatus: {
    accessToken: null,
    accessExp: null,
    refreshToken: null,
    refreshExp: null,
  },
  setUserStatus: (status) =>
    set(() => ({
      currentUserStatus: {
        accessToken: status.accessToken,
        accessExp: status.accessExp,
        refreshToken: status.refreshToken,
        refreshExp: status.refreshExp,
      },
    })),
}));

export const useUserStatus = () => {
  const { currentUserStatus, setUserStatus: _setUserStatus } = userStatusZustand();

  const resetUserStatus = () => {
    _setUserStatus({ accessToken: null, accessExp: null, refreshExp: null, refreshToken: null });
  };

  const isLogined = currentUserStatus.accessToken !== null;

  const setUserStatus = (userStatus: UserStatusObjType) => {
    _setUserStatus({
      accessToken: userStatus.accessToken,
      accessExp: userStatus.accessExp,
      refreshToken: userStatus.refreshToken,
      refreshExp: userStatus.refreshExp,
    });
  };

  return { resetUserStatus, setUserStatus, isLogined, currentUserStatus };
};
