import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { CompanyArrRequestObjDef, companyArrKeyObj } from "../keyFactory";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies`, { params: requestObj });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestObjDef) => {
  const queryResult = useQuery(companyArrKeyObj.companyArr(requestObj), getCompanyArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};
