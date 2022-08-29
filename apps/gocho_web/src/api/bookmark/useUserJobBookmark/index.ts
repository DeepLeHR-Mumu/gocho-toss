import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  userJobBookmarkArrKeyObj,
  UserJobBookmarkArrRequestDef,
} from "@constant/queryKeyFactory/bookmark/jobArrKeyObj";

import { GetUserJobBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserJobBookmarkArr: GetUserJobBookmarkArrDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const token = localStorage.getItem("token") as string;

  const { data } = await axiosInstance.get(
    `/users/${requestObj?.userId}/jd-bookmarks`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useUserJobBookmarkArr = (
  requestObj: UserJobBookmarkArrRequestDef
) => {
  const queryResult = useQuery(
    userJobBookmarkArrKeyObj.bookmarkArr(requestObj),
    getUserJobBookmarkArr,
    {
      enabled: Boolean(requestObj.userId),
      select: ({ data }) => {
        return selector(data);
      },
    }
  );
  return queryResult;
};
