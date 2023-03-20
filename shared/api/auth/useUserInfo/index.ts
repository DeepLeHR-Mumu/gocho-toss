import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const postUserAuth = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/auth/detokenize`, { headers });
  return data;
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: userInfoKeyObj.userInfo,
    queryFn: postUserAuth,
    select: ({ data }) => {
      return selector(data);
    },
  });
};
