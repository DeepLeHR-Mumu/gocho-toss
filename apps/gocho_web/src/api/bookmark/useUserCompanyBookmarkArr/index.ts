import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { userBookmarkKeyObj, UserBookmarkArrRequestDef } from "@constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { GetUserCompanyBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-bookmarks`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  const queryResult = useQuery(userBookmarkKeyObj.companyBookmarkArr(requestObj), getUserCompanyBookmarkArr, {
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
