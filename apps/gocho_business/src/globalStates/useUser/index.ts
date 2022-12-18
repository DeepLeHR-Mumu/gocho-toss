import create from "zustand";
import { useEffect } from "react";

import { useUserInfo } from "@/api/auth/useUserInfo";

import { UserZustandlProps } from "./type";

const userZustand = create<UserZustandlProps>((set) => ({
  userInfo: null,
  setUserInfo: (status) => set(() => ({ userInfo: status })),
}));

export const useUser = () => {
  const { userInfo: currentUserInfo, setUserInfo } = userZustand();
  const { data: userInfoData, isSuccess: isLogined } = useUserInfo();

  useEffect(() => {
    if (userInfoData) {
      setUserInfo(userInfoData);
    }
  }, [setUserInfo, userInfoData]);

  return { currentUserInfo, isLogined };
};
