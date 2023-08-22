import { useInfiniteQuery } from "@tanstack/react-query";

import { jdArrKeyObj, JdArrRequestObjDef } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetInfiniteJdArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteJdArr: GetInfiniteJdArrDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosInstance.get("/jds", {
    params: { ...requestObj, page: pageParam },
  });
  const nextPage = pageParam === undefined ? 1 : pageParam + 1;
  return { ...data, nextPage };
};

export const useInfiniteJdArr = (requestObj: JdArrRequestObjDef) => {
  return useInfiniteQuery({
    queryKey: jdArrKeyObj.infinite(requestObj),
    queryFn: getInfiniteJdArr,
    getNextPageParam: (responseObj) => {
      return responseObj.page_result.total_pages === responseObj.page_result.page
        ? undefined
        : responseObj.page_result.page + 1;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => {
          return selector(page.data, page.page_result);
        }),
        pageParams: [...data.pageParams],
      };
    },
  });
};
