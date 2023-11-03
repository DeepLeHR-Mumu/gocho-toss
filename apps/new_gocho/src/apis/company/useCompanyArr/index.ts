import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import { companyArrKeyObj, CompanyArrRequestDef } from "@/constants/queryKeyFactory/company/arrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const { data } = await axiosInstance.get(`${BACKEND_URL_WITHOUT_VERSION}/v2/companies`, {
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) =>
  useQuery({
    queryKey: companyArrKeyObj.companyArr(requestObj),
    queryFn: getCompanyArr,
    enabled: Boolean(requestObj.order),
    select: ({ data, page_result }) => selector(data, page_result),
  });
