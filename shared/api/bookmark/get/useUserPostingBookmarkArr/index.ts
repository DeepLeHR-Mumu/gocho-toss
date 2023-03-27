import { useQuery } from "@tanstack/react-query";
import { UserBookmarkArrRequestDef, userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";
import { GetUserPostingBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserPostingBookmarkArr: GetUserPostingBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/posting-likes`, { headers });
  return data;
};

export const useUserPostingBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: userBookmarkKeyObj.postingBookmarkArr(requestObj),
    queryFn: getUserPostingBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: (data) => {
      return selector(data);
    },
  });
};
