import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { DeleteUserInfoDef, RequestObjDef, UseDeleteUserInfoDef } from "./type";

const deleteUserInfo: DeleteUserInfoDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/users/${requestObj?.id}`);
  return data;
};

export const useDeleteUserInfo: UseDeleteUserInfoDef = (onSuccessAction) => useMutation<ResponseDef, AxiosError, RequestObjDef>({
    mutationFn: deleteUserInfo,
    onSuccess: () => {
      onSuccessAction();
    },
  });
