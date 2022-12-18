import { useQuery } from "@tanstack/react-query";

import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";

import { axiosInstance } from "../../useAxiosInterceptor";
import { selector } from "./util";

export const getUserAuth = async () => {
  const { data } = await axiosInstance.get(`/auth/detokenize`);
  return data;
};

export const useUserInfo = () => {
  const queryResult = useQuery(userInfoKeyObj.userInfo, getUserAuth, {
    select: ({ data }) => selector(data),
  });
  return queryResult;
};
