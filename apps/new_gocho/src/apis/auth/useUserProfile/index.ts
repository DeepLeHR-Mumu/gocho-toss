import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get(`/users/profile`);
  return data;
};

// TODO: swagger 에서 Deprecated 명시, 논의 후 수정
export const useUserProfile = () => {
  return useQuery({
    queryKey: userInfoKeyObj.userProfile,
    queryFn: getUserProfile,
    select: ({ data }) => {
      return selector(data);
    },
  });
};
