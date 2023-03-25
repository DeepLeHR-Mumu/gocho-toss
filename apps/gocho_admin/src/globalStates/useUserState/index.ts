import { create } from "zustand";
import { useEffect } from "react";

import { managerTokenDecryptor, sharedGetLocalStorageItem } from "shared-util";

import { UserStateInfoProps, UseUserStateDef } from "./type";

const userStateInfo = create<UserStateInfoProps>((set) => ({
  userState: null,
  setUserState: (status) => set(() => ({ userState: status })),
}));

export const useUserState: UseUserStateDef = () => {
  const { userState: userInfoData, setUserState: setUserInfoData } = userStateInfo();

  useEffect(() => {
    const token = sharedGetLocalStorageItem("accessToken");

    if (userInfoData === null && token) {
      const { id, company_id, company_name, company_logo, company_industry, exp, email, name, department } =
        managerTokenDecryptor(token);

      setUserInfoData({
        id,
        companyId: company_id,
        companyName: company_name,
        companyLogo: company_logo,
        email,
        name,
        department,
        exp,
        companyIndustry: company_industry,
      });
    }

    if (userInfoData === null && !token) {
      setUserInfoData(false);
    }
  }, [userInfoData, setUserInfoData]);

  if (userInfoData) {
    return { userInfoData, setUserInfoData };
  }

  return { setUserInfoData };
};
