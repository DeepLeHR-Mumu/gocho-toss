import { useInfiniteQuery } from "@tanstack/react-query";

import { jobArrKeyObj, JobArrRequestObjDef } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetInfiniteJobArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteJobArr: GetInfiniteJobArrDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosNoTokenInstance.get("/jds", {
    params: { ...requestObj, offset: pageParam },
  });

  const nextPage = pageParam === undefined ? 10 : pageParam + 10;
  return { ...data, nextPage };
};

export const useInfiniteJobArr = (requestObj: JobArrRequestObjDef) => {
  const queryResult = useInfiniteQuery({
    queryKey: jobArrKeyObj.infinite(requestObj),
    queryFn: getInfiniteJobArr,
    getNextPageParam: (responseObj) => {
      return responseObj.data.length !== 0 ? responseObj.nextPage : undefined;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => {
          return selector(page.data, page.count);
        }),
        pageParams: [...data.pageParams],
      };
    },
  });
  return queryResult;
};
