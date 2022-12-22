import { useQuery } from "@tanstack/react-query";

import { userStateKeyObj } from "@/constants/queryKeyFactory/user/userStateKeyObj";
import { tokenService } from "@/util/tokenService";

import { axiosNoTokenInstance } from "../../useIsRefreshLock";

export const getHealthCheck = async () => {
  const token = tokenService.getAccessToken();

  const { data } = await axiosNoTokenInstance.get(`/auth/health-check`, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useHealthCheck = () => useQuery(userStateKeyObj.userState, getHealthCheck);
