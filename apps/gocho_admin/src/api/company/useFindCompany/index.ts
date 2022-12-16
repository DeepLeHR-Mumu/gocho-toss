import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/useAxiosInterceptor";

import { companyArrFindKeyObj, GetCompanyArrDef, RequestObjDef } from "./type";
import { companyArrSelector } from "./util";

export const getFindCompany: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/find/name`, {
    params: requestObj,
  });
  return data;
};

export const useFindCompany = (requestObj: RequestObjDef) => {
  return useQuery(companyArrFindKeyObj.find(requestObj), getFindCompany, {
    select: (data) => {
      return companyArrSelector(data);
    },
  });
};
