import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/useIsRefreshLock";

import { companyDetailKeyObj, GetCompanyDetailDef, RequestObjDef } from "./type";
import { companyDetailSelector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });

// <ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof companyDetailSelector>>
