import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, OldUserBookmarkRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";

import { GetUserBookmarkDef } from "./type";

export const getUserBookmark: GetUserBookmarkDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/${requestObj.likeType}/${requestObj.elemId}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserBookmark = (requestObj: OldUserBookmarkRequestDef) => {
  const queryResult = useQuery(oldBookmarkKeyObj.bookmark(requestObj), getUserBookmark, {
    enabled: Boolean(requestObj.userId),
  });
  return queryResult;
};
