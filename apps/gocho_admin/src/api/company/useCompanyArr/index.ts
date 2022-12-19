import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/useAxiosInterceptor";

import { companyArrKeyObj, GetCompanyArrDef, RequestObjDef } from "./type";
import { companyArrSelector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies`, { params: requestObj });
  return data;
};

export const useCompanyArr = (requestObj: RequestObjDef) => {
  return useQuery(companyArrKeyObj.arr(requestObj), getCompanyArr, {
    select: (data) => {
      return companyArrSelector(data);
    },
  });
};
