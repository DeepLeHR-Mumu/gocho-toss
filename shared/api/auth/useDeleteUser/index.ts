import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { DeleteUserInfoDef, RequestObjDef, UseDeleteUserInfoDef } from "./type";

const deleteUserInfo: DeleteUserInfoDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.delete(`/users/${requestObj?.id}`, { headers });
  return data;
};

export const useDeleteUserInfo: UseDeleteUserInfoDef = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteUserInfo });
};
