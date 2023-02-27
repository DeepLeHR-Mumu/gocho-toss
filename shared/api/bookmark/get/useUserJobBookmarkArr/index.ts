import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { axiosInstance } from "../../../axiosInstance";

import { GetUserJobBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserJobBookmarkArr: GetUserJobBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-bookmarks`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserJobBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  const queryResult = useQuery(oldBookmarkKeyObj.jobBookmarkArr(requestObj), getUserJobBookmarkArr, {
    enabled: Boolean(requestObj.userId),
    select: (data) => {
      return selector(data);
    },
  });
  return queryResult;
};
