import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef, DeleteUserInfoDef, UseDeleteUserInfoDef } from "./type";

const deleteUserInfo: DeleteUserInfoDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(`/users/${requestObj?.id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useDeleteUserInfo: UseDeleteUserInfoDef = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteUserInfo });
  return mutationResult;
};
