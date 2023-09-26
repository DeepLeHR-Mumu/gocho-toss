import { useQuery } from "@tanstack/react-query";

import { companyArrKeyObj, CompanyArrRequestDef } from "@/constants/queryKeyFactory/company/arrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/companies", {
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) => useQuery({
    queryKey: companyArrKeyObj.companyArr(requestObj),
    queryFn: getCompanyArr,
    enabled: Boolean(requestObj.order),
    select: ({ data, page_result }) => selector(data, page_result),
  });
