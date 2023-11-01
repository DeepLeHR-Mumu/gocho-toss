import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import { UserBookmarkArrRequestDef, userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetUserCompanyBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const { data } = await axiosInstance.get(
    `${BACKEND_URL_WITHOUT_VERSION}/v2/users/${requestObj?.userId}/company-bookmarks`,
    { params: requestObj }
  );
  return data;
};

export const useUserCompanyBookmarkArr = (requestObj: UserBookmarkArrRequestDef) =>
  useQuery({
    queryKey: userBookmarkKeyObj.companyBookmarkArr(requestObj),
    queryFn: getUserCompanyBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => selector(data, page_result),
  });
