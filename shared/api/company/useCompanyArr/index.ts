import { useQuery } from "@tanstack/react-query";

import { companyArrKeyObj, CompanyArrRequestDef } from "shared-constant/queryKeyFactory/company/arrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/companies", {
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) => {
  return useQuery({
    queryKey: companyArrKeyObj.companyArr(requestObj),
    queryFn: getCompanyArr,
    enabled: Boolean(requestObj.order),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
