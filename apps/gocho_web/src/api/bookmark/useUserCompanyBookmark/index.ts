import { useQuery } from "@tanstack/react-query";

import {
  userCompanyBookmarkArrKeyObj,
  UserCompanyBookmarkArrRequestDef,
} from "@constant/queryKeyFactory/bookmark/companyArrKeyObj";
import { axiosInstance } from "@api/axiosInstance";

import { GetUserCompanyBookmarkArrDef } from "./type";

export const getUserCompanyBookmarkArr: GetUserCompanyBookmarkArrDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const token = localStorage.getItem("token") as string;

  const { data } = await axiosInstance.get(
    `/users/${requestObj?.userId}/company-bookmarks`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useUserCompanyBookmarkArr = (
  requestObj: UserCompanyBookmarkArrRequestDef
) => {
  const queryResult = useQuery(
    userCompanyBookmarkArrKeyObj.bookmarkArr(requestObj),
    getUserCompanyBookmarkArr,
    { enabled: Boolean(requestObj.userId) }
  );
  return queryResult;
};
