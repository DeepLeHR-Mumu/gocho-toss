import { useQuery } from "@tanstack/react-query";

import {
  UserBookmarkArrRequestDef,
  userBookmarkKeyObj,
} from "shared-constant/queryKeyFactory/job/jobUserBookmarkArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetUserJobBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserJobBookmarkArr: GetUserJobBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-bookmarks`, { params: requestObj });
  return data;
};

export const useUserJobBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: userBookmarkKeyObj.jobBookmarkArr(requestObj),
    queryFn: getUserJobBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
