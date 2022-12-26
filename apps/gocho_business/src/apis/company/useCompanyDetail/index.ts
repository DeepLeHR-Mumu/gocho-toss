import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { companyDetailKeyObj, GetCompanyDetailDef, ResponseObjDef } from "./type";
import { companyDetailSelector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async () => {
  const { data } = await axiosInstance.get("/companies/${}");
  return data;
};

export const useCompanyDetail = (isLogin: boolean) =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof companyDetailSelector>>(
    companyDetailKeyObj.all,
    getCompanyDetail,
    {
      select: (data) => companyDetailSelector(data),
      enabled: isLogin,
    }
  );
