import { useInfiniteQuery } from "@tanstack/react-query";

import {
  userBookmarkKeyObj,
  UserBookmarkArrRequestDef,
} from "shared-constant/queryKeyFactory/job/jobUserBookmarkArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetInfiniteJobArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteUserJobBookmarkArr: GetInfiniteJobArrDef = async ({
  queryKey: [{ requestObj }],
  pageParam,
}) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/jd-bookmarks`, {
    params: { ...requestObj, page: pageParam },
  });
  const nextPage = pageParam === undefined ? 1 : pageParam + 1;
  return { ...data, nextPage };
};

export const useInfiniteUserJobBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useInfiniteQuery({
    queryKey: userBookmarkKeyObj.infinite(requestObj),
    queryFn: getInfiniteUserJobBookmarkArr,
    getNextPageParam: (responseObj) => {
      return responseObj.page_result.total_pages === responseObj.page_result.page
        ? undefined
        : responseObj.page_result.page + 1;
    },
    enabled: Boolean(requestObj.userId),
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
