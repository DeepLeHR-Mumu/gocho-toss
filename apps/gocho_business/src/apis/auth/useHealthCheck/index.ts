import { useQuery } from "@tanstack/react-query";

import { userStateKeyObj } from "./type";

import { axiosInstance } from "../../useIsRefreshLock";

export const getHealthCheck = async () => {
  const { data } = await axiosInstance.get(`/auth/health-check`);
  return data;
};

export const useHealthCheck = () => useQuery(userStateKeyObj.all, getHealthCheck);
