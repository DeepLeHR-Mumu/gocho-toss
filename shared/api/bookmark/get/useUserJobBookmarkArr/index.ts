import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { axiosInstance } from "../../../axiosInstance";

import { GetUserJobBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserJobBookmarkArr: GetUserJobBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-bookmarks`, { headers });
  return data;
};

export const useUserJobBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: oldBookmarkKeyObj.jobBookmarkArr(requestObj),
    queryFn: getUserJobBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: (data) => {
      return selector(data);
    },
  });
};
