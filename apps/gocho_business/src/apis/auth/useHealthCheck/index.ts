import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { userStateKeyObj } from "./type";

export const getHealthCheck = async () => {
  const { data } = await axiosInstance.get(`/auth/health-check`);
  return data;
};

export const useHealthCheck = () => useQuery({ queryKey: userStateKeyObj.all, queryFn: getHealthCheck });
