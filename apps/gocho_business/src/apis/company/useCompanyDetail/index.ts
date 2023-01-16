import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/useIsRefreshLock";

import {
  companyDetailKeyObj,
  GetCompanyDetailDef,
  GetCompanyDetailDef2,
  GetCompanyDetailDef3,
  GetCompanyDetailDef4,
  RequestObjDef,
} from "./type";
import { companyDetailSelector } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const getCompanyDetail2: GetCompanyDetailDef2 = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const getCompanyDetail3: GetCompanyDetailDef3 = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const getCompanyDetail4: GetCompanyDetailDef4 = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail(requestObj), getCompanyDetail, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });

export const useCompanyDetail2 = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail2(requestObj), getCompanyDetail2, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
export const useCompanyDetail3 = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail3(requestObj), getCompanyDetail3, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
export const useCompanyDetail4 = (requestObj: RequestObjDef) =>
  useQuery(companyDetailKeyObj.detail4(requestObj), getCompanyDetail4, {
    enabled: Boolean(requestObj.companyId),
    select: (data) => companyDetailSelector(data),
  });
