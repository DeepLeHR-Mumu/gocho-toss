import { useQuery } from "@tanstack/react-query";

import { UserBookmarkArrRequestDef, userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetUserCompanyBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/company-bookmarks`, { params: requestObj });
  return data;
};

export const useUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: userBookmarkKeyObj.companyBookmarkArr(requestObj),
    queryFn: getUserCompanyBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
