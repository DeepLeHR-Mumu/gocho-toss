import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";

import { companyDetailKeyObj, GetCompanyDetailDef, RequestObjDef, ResponseObjDef } from "./type";
import { companyDetailSelector } from "./util";
import { ErrorResponseDef } from "@/types/errorType";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof companyDetailSelector>,
    ReturnType<typeof companyDetailKeyObj.detail>
  >(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
