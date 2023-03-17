import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { PatchUserInfoDef, RequestObjDef, ResponseObjDef } from "./type";
import { axiosInstance } from "../../useIsRefreshLock";

const patchUserInfo: PatchUserInfoDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/managers/${requestObj.managerId}`, {
    new_password: requestObj.new_password,
    origin_password: requestObj.origin_password,
  });
  return data;
};

export const useEditUserInfo = () =>
  useMutation<AxiosResponse<ResponseObjDef>, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: patchUserInfo,
  });
