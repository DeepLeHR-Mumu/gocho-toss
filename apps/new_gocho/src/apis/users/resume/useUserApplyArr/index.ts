import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { UserApplyArrRequestObj, resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { GetApplyArrDef } from "./type";
import { selector } from "./util";

export const getUserApplyArr: GetApplyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/applies`, { params: requestObj });
  return data;
};

export const useUserApplyArr = (requestObj: UserApplyArrRequestObj) =>
  useQuery({
    queryKey: resumeArrKeyObj.applyArr(requestObj),
    queryFn: getUserApplyArr,
    select: ({ data }) => selector(data),
    enabled: Boolean(requestObj.userId),
  });
