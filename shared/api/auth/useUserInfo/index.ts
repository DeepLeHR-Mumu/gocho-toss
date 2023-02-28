import { useQuery } from "@tanstack/react-query";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";

export const postUserAuth = async () => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/auth/check`,
    {},
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const useUserInfo = () => {
  const queryResult = useQuery({
    queryKey: userInfoKeyObj.userInfo,
    queryFn: postUserAuth,
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
