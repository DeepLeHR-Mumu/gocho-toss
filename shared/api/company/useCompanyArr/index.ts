import { useQuery } from "@tanstack/react-query";
import { companyArrKeyObj, CompanyArrRequestDef } from "shared-constant/queryKeyFactory/company/arrKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get("/companies", {
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) => {
  return useQuery({
    queryKey: companyArrKeyObj.companyArr(requestObj),
    queryFn: getCompanyArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
    enabled: Boolean(requestObj.order),
  });
};
