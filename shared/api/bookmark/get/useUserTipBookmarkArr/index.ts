import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";

import { GetUserTipBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserTipBookmarkArr: GetUserTipBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token") as string;

  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/tips-likes`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserTipBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  const queryResult = useQuery(oldBookmarkKeyObj.tipBookmarkArr(requestObj), getUserTipBookmarkArr, {
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
