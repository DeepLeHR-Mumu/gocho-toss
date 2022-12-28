import create from "zustand";
import { useEffect } from "react";

import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { tokenService } from "@/utils/tokenService";

import { UserStateInfoProps, UseUserStateDef } from "./type";

const userStateInfo = create<UserStateInfoProps>((set) => ({
  userState: null,
  setUserState: (status) => set(() => ({ userState: status })),
}));

export const useUserState: UseUserStateDef = () => {
  const { userState: userInfoData, setUserState: setUserInfoData } = userStateInfo();

  useEffect(() => {
    const token = tokenService.getAccessToken();

    if (userInfoData === null && token) {
      const { id, company_id, company_name, company_logo, iat, exp, email, name, department } =
        managerTokenDecryptor(token);

      setUserInfoData({
        id,
        companyId: company_id,
        companyName: company_name,
        companyLogo: company_logo,
        email,
        name,
        department,
        iat,
        exp,
      });
    }

    if (userInfoData === null && !token) {
      setUserInfoData(false);
    }
  }, [userInfoData, setUserInfoData]);

  if (!userInfoData) {
    return { setUserInfoData };
  }

  return { userInfoData, setUserInfoData };
};
