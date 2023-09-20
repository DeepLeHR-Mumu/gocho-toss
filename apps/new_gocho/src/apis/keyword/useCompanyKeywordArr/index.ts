import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "../../axiosInstance";
import { companyKeywordArrSelector } from "./util";
import { companyKeywordArrKeyObj, GetCompanyKeywordArrDef, ResponseObjDef } from "./type";

export const getCompanyKeywordArr: GetCompanyKeywordArrDef = async () => {
  const { data } = await axiosInstance.get(`/keywords/company`);
  return data;
};

export const useCompanyKeywordArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof companyKeywordArrSelector>>({
    queryKey: companyKeywordArrKeyObj.all,
    queryFn: getCompanyKeywordArr,
    select: (data: ResponseObjDef) => companyKeywordArrSelector(data),
  });
