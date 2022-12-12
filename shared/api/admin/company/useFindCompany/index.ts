import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { CompanyArrRequestObjDef, companyArrKeyObj } from "../keyFactory";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getFindCompany: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/find/name`, {
    params: requestObj,
  });
  return data;
};

export const useFindCompany = (requestObj: CompanyArrRequestObjDef) => {
  const queryResult = useQuery(companyArrKeyObj.companyArr(requestObj), getFindCompany, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};
