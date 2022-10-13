import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { CompanyDetailResponseDef, GetCompanyDetailDef, UseCompanyDetailDef, UseCompanyDetailResultDef } from "./type";
import { companyConverter } from "./util";

export const getCompanyDetail: GetCompanyDetailDef = async (requestObj) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}`);
  return data;
};

export const useCompanyDetail: UseCompanyDetailDef = (requestObj) => {
  const queryResult = useQuery<CompanyDetailResponseDef, AxiosError, UseCompanyDetailResultDef>(
    companyDetailKeyObj.detail(requestObj),
    () => {
      return getCompanyDetail(requestObj);
    },
    {
      enabled: Boolean(requestObj.companyId),
      select: ({ data }) => {
        return companyConverter(data);
      },
    }
  );
  return queryResult;
};
