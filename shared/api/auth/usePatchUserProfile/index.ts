import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import {
  ErrorResponse,
  PatchUserProfileDef,
  RequestObjDef,
  UsePatchUserProfileProps,
  UserProfileResponse,
} from "./type";

const patchUserProfile: PatchUserProfileDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token, "Content-Type": "application/json" } : undefined;
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/profile`, { ...requestObj }, { headers });
  return data;
};

export const usePatchUserProfile: UsePatchUserProfileProps = () => {
  return useMutation<UserProfileResponse, ErrorResponse, RequestObjDef>({ mutationFn: patchUserProfile });
};
