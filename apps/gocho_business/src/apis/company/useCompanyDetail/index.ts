import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { companyDetailKeyObj, GetCompanyDetailDef, RequestObjDef, ResponseObjDef } from "./type";
import { companyDetailSelector } from "./util";

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
  >({
    queryKey: companyDetailKeyObj.detail(requestObj),
    queryFn: getCompanyDetail,
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
