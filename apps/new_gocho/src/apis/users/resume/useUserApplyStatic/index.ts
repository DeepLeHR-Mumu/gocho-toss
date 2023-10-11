import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { GetUserApplyStaticDef } from "./type";
import { selector } from "./util";

export const getUserApplyStatic: GetUserApplyStaticDef = async ({ queryKey: [requestObj] }) => {
  const { userId } = requestObj;
  const { data } = await axiosInstance.get(`/users/${userId}/applies/statistics`);
  return data;
};

export const useUserApplyStatic = (userId: number) =>
  useQuery({
    queryKey: resumeArrKeyObj.applyStatic(userId),
    queryFn: getUserApplyStatic,
    select: ({ data }) => selector(data),
  });
