import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { PatchUserPasswordDef, RequestObjDef, ResponseObjDef } from "./type";
import { axiosInstance } from "../../axiosInstance";

const patchUserPassword: PatchUserPasswordDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/managers/${requestObj.managerId}/password`, {
    new_password: requestObj.new_password,
    origin_password: requestObj.origin_password,
  });
  return data;
};

export const useEditUserPassword = () =>
  useMutation<AxiosResponse<ResponseObjDef>, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: patchUserPassword,
  });
