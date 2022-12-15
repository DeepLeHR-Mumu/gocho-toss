import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/axiosInstance";

import { companyArrKeyObj, CompanyArrRequestObjDef } from "../keyFactory";
import { GetCompanyArrDef } from "./type";
import { companyArrSelector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies`, { params: requestObj });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestObjDef) => {
  return useQuery(companyArrKeyObj.companyArr(requestObj), getCompanyArr, {
    select: ({ data, count }) => {
      return companyArrSelector(data, count);
    },
  });
};
