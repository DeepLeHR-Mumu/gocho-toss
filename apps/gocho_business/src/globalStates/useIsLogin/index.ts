import create from "zustand";
// import { useEffect } from "react";

// import { useUserInfo } from "@/api/auth/useUserInfo";

import { IsLoginZustandlProps } from "./type";

const isLoginZustand = create<IsLoginZustandlProps>((set) => ({
  isLogined: false,
  setIsLogined: (status) => set(() => ({ isLogined: status })),
}));

export const useIsLogin = () => {
  const { isLogined, setIsLogined } = isLoginZustand();
  // const { isSuccess } = useUserInfo();

  // useEffect(() => {
  //   setIsLogined(isSuccess);
  // }, [isSuccess, setIsLogined]);

  return { isLogined, setIsLogined };
};
