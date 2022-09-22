import { useQuery } from "@tanstack/react-query";
import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";
import { GetUserPostingBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserPostingBookmarkArr: GetUserPostingBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token") as string;

  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/posting-likes`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserPostingBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  const queryResult = useQuery(oldBookmarkKeyObj.postingBookmarkArr(requestObj), getUserPostingBookmarkArr, {
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
