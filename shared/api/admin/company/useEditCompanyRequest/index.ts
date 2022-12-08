import { useQuery } from "@tanstack/react-query";

import {
  companyDetailKeyObj,
  CompanyDetailKeyObjDef,
} from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetEditCompanyRequestDef } from "./type";
import { selector } from "./util";

export const getEditCompanyRequest: GetEditCompanyRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/requests`);
  return data;
};

export const useEditCompanyRequest = (requestObj: CompanyDetailKeyObjDef) => {
  return useQuery(companyDetailKeyObj.detail(requestObj), getEditCompanyRequest, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
