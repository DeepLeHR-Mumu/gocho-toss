import { useQuery } from "@tanstack/react-query";

import { oldBookmarkKeyObj, UserBookmarkArrRequestDef } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";

import { GetUserCompanyBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-bookmarks`, { headers });
  return data;
};

export const useUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: oldBookmarkKeyObj.companyBookmarkArr(requestObj),
    queryFn: getUserCompanyBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
