import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "../../axiosInstance";
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
