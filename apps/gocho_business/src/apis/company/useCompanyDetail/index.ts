import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/useIsRefreshLock";

import { companyDetailKeyObj, GetCompanyDetailDef, RequestObjDef } from "./type";
import { companyDetailSelector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const getCompanyDetail2: GetCompanyDetailDef = async () => {
  const { data } = await axiosInstance.get(`/companies/869`);
  return data;
};

export const useCompanyDetail = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });

export const useCompanyDetail2 = (requestObj: RequestObjDef) =>
  useQuery(["aaaaa22332"], getCompanyDetail2, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });

export const useCompanyDetail3 = (requestObj: RequestObjDef) =>
  useQuery(["aaaaa223"], getCompanyDetail2, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });

export const useCompanyDetail4 = (requestObj: RequestObjDef) =>
  useQuery(["aaaaa2244"], getCompanyDetail2, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
