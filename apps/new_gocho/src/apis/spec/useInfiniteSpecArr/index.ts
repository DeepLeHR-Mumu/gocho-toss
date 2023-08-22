import { useInfiniteQuery } from "@tanstack/react-query";

import { SpecArrInfinityRequestDef, specArrKeyObj } from "@/constants/queryKeyFactory/spec/arrKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetInifiniteSpecArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteSpecArr: GetInifiniteSpecArrDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosNoTokenInstance.get("/specs", {
    params: { ...requestObj, offset: pageParam },
  });
  const nextPage = pageParam === undefined ? 20 : pageParam + 20;

  return { ...data, nextPage };
};

export const useInfiniteSpecArr = (requestObj: SpecArrInfinityRequestDef) => {
  return useInfiniteQuery({
    queryKey: specArrKeyObj.infinite(requestObj),
    queryFn: getInfiniteSpecArr,
    getNextPageParam: (responseObj) => {
      return responseObj.data.length !== 0 ? responseObj.nextPage : undefined;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => {
          return selector(page.data);
        }),
        pageParams: [...data.pageParams],
      };
    },
  });
};
