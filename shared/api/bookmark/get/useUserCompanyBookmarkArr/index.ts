import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";

import { GetUserCompanyBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-bookmarks`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  const queryResult = useQuery(oldBookmarkKeyObj.companyBookmarkArr(requestObj), getUserCompanyBookmarkArr, {
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
