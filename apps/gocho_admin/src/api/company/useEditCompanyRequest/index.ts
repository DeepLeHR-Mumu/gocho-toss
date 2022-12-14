import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { companyDetailKeyObj, CompanyDetailRequestObjDef } from "../keyFactory";
import { GetEditCompanyRequestDef } from "./type";
import { selector } from "./util";

export const getEditCompanyRequest: GetEditCompanyRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/requests`);
  return data;
};

export const useEditCompanyRequest = (requestObj: CompanyDetailRequestObjDef) => {
  return useQuery(companyDetailKeyObj.detail(requestObj), getEditCompanyRequest, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
