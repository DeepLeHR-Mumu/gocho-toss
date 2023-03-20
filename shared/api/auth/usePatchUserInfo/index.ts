import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { ErrorResponse, PatchUserInfoDef, RequestObjDef, UsePatchUserInfoProps, UserInfoResponse } from "./type";

const patchUserInfo: PatchUserInfoDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}`, { ...requestObj }, { headers });
  return data;
};

export const usePatchUserInfo: UsePatchUserInfoProps = () => {
  return useMutation<UserInfoResponse, ErrorResponse, RequestObjDef>({ mutationFn: patchUserInfo });
};
