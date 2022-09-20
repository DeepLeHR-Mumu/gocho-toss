import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { PatchUserInfoDef, RequestObjDef, UserInfoResponse, UsePatchUserInfoProps, ErrorResponse } from "./type";

const patchUserInfo: PatchUserInfoDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;

  const { data } = await axiosInstance.patch(
    `/users/${requestObj.userId}`,
    {
      ...requestObj,
    },
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const usePatchUserInfo: UsePatchUserInfoProps = () => {
  const mutationResult = useMutation<UserInfoResponse, ErrorResponse, RequestObjDef>(patchUserInfo);
  return mutationResult;
};
