import create from "zustand";
import { useEffect } from "react";

import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { UserStateZustandlProps } from "./type";

const userStateInfo = create<UserStateZustandlProps>((set) => ({
  userState: null,
  setUserState: (status) => set(() => ({ userState: status })),
}));

export const useUserState = () => {
  const { userState: useInfoData, setUserState: setUseInfoData } = userStateInfo();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (useInfoData === null && token) {
      const { id, company_id, company_name, company_logo, iat, exp, email, name, department } =
        managerTokenDecryptor(token);

      setUseInfoData({
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

    if (useInfoData === null && !token) {
      setUseInfoData(false);
    }
  }, [useInfoData, setUseInfoData]);

  return { useInfoData, setUseInfoData };
};
