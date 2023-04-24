import { useInfiniteQuery } from "@tanstack/react-query";

import { jobArrKeyObj, JobArrRequestObjDef } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetInfiniteJobArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteJobArr: GetInfiniteJobArrDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosInstance.get("/jds", {
    params: { ...requestObj, page: pageParam },
  });
  const nextPage = pageParam === undefined ? 1 : pageParam + 1;
  return { ...data, nextPage };
};

export const useInfiniteJobArr = (requestObj: JobArrRequestObjDef) => {
  return useInfiniteQuery({
    queryKey: jobArrKeyObj.infinite(requestObj),
    queryFn: getInfiniteJobArr,
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
