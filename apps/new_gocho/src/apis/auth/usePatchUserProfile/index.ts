import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { PatchUserProfileDef, RequestObjDef, UsePatchUserProfileProps, UserProfileResponse } from "./type";

const patchUserProfile: PatchUserProfileDef = async (requestObj) => {
  const formData = new FormData();
  if (requestObj.nickname) formData.append("json", JSON.stringify({ nickname: requestObj.nickname }));
  if (requestObj.image) formData.append("image", requestObj.image as File);
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/profile`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const usePatchUserProfile: UsePatchUserProfileProps = () => {
  const queryClient = useQueryClient();
  return useMutation<UserProfileResponse, AxiosError, RequestObjDef>({
    mutationFn: patchUserProfile,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.data.access_token);
      localStorage.setItem("refreshToken", data.data.refresh_token);
      queryClient.invalidateQueries(userInfoKeyObj.userInfo);
    },
  });
};
