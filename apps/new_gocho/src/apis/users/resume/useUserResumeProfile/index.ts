import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { resumeArrKeyObj, UserResumeProfileRequestObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { GetUserResumeProfileDef } from "./type";
import { selector } from "./util";

export const getUserResumeProfile: GetUserResumeProfileDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.userId}/resume-profile`);
  return data;
};

export const useUserResumeProfile = (requestObj: UserResumeProfileRequestObj) =>
  useQuery({
    queryKey: resumeArrKeyObj.resumeProfile(requestObj),
    enabled: Boolean(requestObj.userId),
    queryFn: getUserResumeProfile,
    select: ({ data }) => selector(data),
  });
