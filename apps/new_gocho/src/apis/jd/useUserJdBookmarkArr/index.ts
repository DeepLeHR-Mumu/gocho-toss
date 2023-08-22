import { useQuery } from "@tanstack/react-query";

import { UserBookmarkArrRequestDef, userBookmarkKeyObj } from "@/constants/queryKeyFactory/jd/jdUserBookmarkArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetUserJdBookmarkArrDef } from "./type";
import { selector } from "./util";

export const getUserJdBookmarkArr: GetUserJdBookmarkArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/jd-bookmarks`, { params: requestObj });
  return data;
};

export const useUserJdBookmarkArr = (requestObj: UserBookmarkArrRequestDef) => {
  return useQuery({
    queryKey: userBookmarkKeyObj.jdBookmarkArr(requestObj),
    queryFn: getUserJdBookmarkArr,
    enabled: Boolean(requestObj.userId),
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
  });
};
