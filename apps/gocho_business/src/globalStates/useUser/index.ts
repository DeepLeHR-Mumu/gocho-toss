import create from "zustand";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { IsUserZustandlProps } from "./type";

const userStatusZustand = create<IsUserZustandlProps>((set) => ({
  isLogined: false,
  setIsLogined: (status) => set(() => ({ isLogined: status })),
}));

export const useUserStatus = () => {
  const { isLogined, setIsLogined } = userStatusZustand();
  const router = useRouter();

  useEffect(() => {
    const isAccessToken = localStorage.getItem("accessToken") !== null;
    if (isAccessToken) {
      setIsLogined(true);
    }
  }, [setIsLogined, router]);

  return { setIsLogined, isLogined };
};
