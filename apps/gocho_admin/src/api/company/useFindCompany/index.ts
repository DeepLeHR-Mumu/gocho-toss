import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/axiosInstance";

import { companyArrKeyObj, CompanyArrRequestObjDef } from "../keyFactory";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getFindCompany: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/find/name`, {
    params: requestObj,
  });
  return data;
};

export const useFindCompany = (requestObj: CompanyArrRequestObjDef) => {
  return useQuery(companyArrKeyObj.companyArr(requestObj), getFindCompany, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
