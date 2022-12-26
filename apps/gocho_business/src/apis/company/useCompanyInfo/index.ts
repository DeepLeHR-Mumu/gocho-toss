import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { companyInfoKeyObj, GetCompanyInfoDef, ResponseObjDef } from "./type";
import { companySelector } from "./util";

export const getCompanyInfo: GetCompanyInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyInfo = (isLogin: boolean) =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof companySelector>>(
    companyInfoKeyObj.all,
    getCompanyInfo,
    {
      select: (data) => companySelector(data),
      enabled: isLogin,
    }
  );
