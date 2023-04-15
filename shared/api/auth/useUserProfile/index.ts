import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const getUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/profile`, { headers });
  return data;
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: userInfoKeyObj.userInfo,
    queryFn: getUserProfile,
    select: ({ data }) => {
      return selector(data);
    },
  });
};
