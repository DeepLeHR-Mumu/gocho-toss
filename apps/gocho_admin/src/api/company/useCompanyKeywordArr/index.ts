import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@/api/useAxiosInterceptor";

import { GetCompanyKeywordArrDef, companyKeywordArrKeyObj } from "./type";
import { companyKeywordArrSelector } from "./util";

export const getCompanyKeywordArr: GetCompanyKeywordArrDef = async () => {
  const { data } = await axiosNoTokenInstance.get(`/companies/keywords`);
  return data;
};

export const useCompanyKeywordArr = () =>
  useQuery({
    queryKey: companyKeywordArrKeyObj.all,
    queryFn: getCompanyKeywordArr,
    select: (data) => companyKeywordArrSelector(data),
  });
