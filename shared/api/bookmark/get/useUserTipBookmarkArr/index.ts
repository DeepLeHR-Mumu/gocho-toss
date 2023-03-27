import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";

import { GetUserTipBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserTipBookmarkArr: GetUserTipBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/tip-likes`, { headers });
  return data;
};

export const useUserTipBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: oldBookmarkKeyObj.tipBookmarkArr(requestObj),
    queryFn: getUserTipBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: (data) => {
      return selector(data);
    },
  });
};
