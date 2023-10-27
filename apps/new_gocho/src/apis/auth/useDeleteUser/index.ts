import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { DeleteUserInfoDef, RequestObjDef, UseDeleteUserInfoDef } from "./type";

const deleteUserInfo: DeleteUserInfoDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/users/${requestObj?.id}`);
  return data;
};

export const useDeleteUserInfo: UseDeleteUserInfoDef = (onSuccessAction) =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: deleteUserInfo,
    onSuccess: () => {
      onSuccessAction();
    },
  });
