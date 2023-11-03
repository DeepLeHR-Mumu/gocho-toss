import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { BACKEND_URL } from "shared-constant";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "../../axiosInstance";
import { companyKeywordArrSelector } from "./util";
import { companyKeywordArrKeyObj, GetCompanyKeywordArrDef, ResponseObjDef } from "./type";

export const getCompanyKeywordArr: GetCompanyKeywordArrDef = async () => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const { data } = await axiosInstance.get(`${BACKEND_URL_WITHOUT_VERSION}/v2/keywords/company`);
  return data;
};

export const useCompanyKeywordArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof companyKeywordArrSelector>>({
    queryKey: companyKeywordArrKeyObj.all,
    queryFn: getCompanyKeywordArr,
    select: (data: ResponseObjDef) => companyKeywordArrSelector(data),
  });
