import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { userBookmarkKeyObj, UserBookmarkRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

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

export const useUserBookmark = (requestObj: UserBookmarkRequestDef) => {
  const queryResult = useQuery(userBookmarkKeyObj.bookmark(requestObj), getUserBookmark, {
    enabled: Boolean(requestObj.userId),
  });
  return queryResult;
};
