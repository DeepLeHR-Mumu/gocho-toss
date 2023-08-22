import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get(`/users/profile`);
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
