import { useInfiniteQuery } from "@tanstack/react-query";

import {
  userBookmarkKeyObj,
  UserBookmarkArrRequestDef,
} from "@/constants/queryKeyFactory/company/companyUserBookmarkArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetInfiniteJdArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteUserCompanyBookmarkArr: GetInfiniteJdArrDef = async ({
  queryKey: [{ requestObj }],
  pageParam,
}) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/company-bookmarks`, {
    params: { ...requestObj, page: pageParam },
  });
  const nextPage = pageParam === undefined ? 1 : pageParam + 1;
  return { ...data, nextPage };
};

export const useInfiniteUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => useInfiniteQuery({
    queryKey: userBookmarkKeyObj.infinite(requestObj),
    queryFn: getInfiniteUserCompanyBookmarkArr,
    getNextPageParam: (responseObj) => {
      if (responseObj.page_result.total_pages === 0) return undefined;
      return responseObj.page_result.total_pages === responseObj.page_result.page
        ? undefined
        : responseObj.page_result.page + 1;
    },
    enabled: Boolean(requestObj.userId),
    select: (data) => ({
        pages: data.pages.map((page) => selector(page.data, page.page_result)),
        pageParams: [...data.pageParams],
      }),
  });
