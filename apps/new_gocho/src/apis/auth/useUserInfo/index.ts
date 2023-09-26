import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get(`/users/info`);
  return data;
};

export const useUserInfo = () => useQuery({
    queryKey: userInfoKeyObj.userInfo,
    queryFn: getUserInfo,
    select: ({ data }) => selector(data),
  });
