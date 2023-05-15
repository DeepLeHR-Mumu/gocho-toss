import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@/api/useAxiosInterceptor";

import { GetSearchKeywordArrDef, searchKeywordArrKeyObj } from "./type";

export const getSearchKeywordArr: GetSearchKeywordArrDef = async () => {
  const { data } = await axiosNoTokenInstance.get(`/keywords/search`);
  return data;
};

export const useSearchKeywordArr = () =>
  useQuery({
    queryKey: searchKeywordArrKeyObj.all,
    queryFn: getSearchKeywordArr,
  });
