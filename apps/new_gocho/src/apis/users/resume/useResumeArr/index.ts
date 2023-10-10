import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { GetUserResumeArrDef } from "./type";

export const getUserResumeArr: GetUserResumeArrDef = async (userId: number) => {
  const { data } = await axiosInstance.get(`/users/${userId}/resumes`);
  return data;
};

export const useResumeArr = (userId?: number) =>
  useQuery({
    queryKey: userId ? resumeArrKeyObj.resumeArr(userId) : undefined,
    queryFn: ({ queryKey: [{ userId: queryKeyUserId }] }) => getUserResumeArr(queryKeyUserId),
  });
