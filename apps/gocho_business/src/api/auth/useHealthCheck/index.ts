import { useQuery } from "@tanstack/react-query";

import { userStateKeyObj } from "@/constants/queryKeyFactory/user/userStateKeyObj";

import { axiosInstance } from "../../useAxiosInterceptor";

export const getHealthCheck = async () => {
  const { data } = await axiosInstance.get(`/auth/health-check`);
  return data;
};

export const useHealthCheck = () => useQuery(userStateKeyObj.userState, getHealthCheck);
