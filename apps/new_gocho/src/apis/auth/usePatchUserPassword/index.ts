import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";
import { axiosInstance } from "../../axiosInstance";

import { PatchUserPasswordDef, RequestObjDef, UsePatchUserPasswordProps, UserPasswordResponse } from "./type";

const patchUserPassword: PatchUserPasswordDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/password`, { ...requestObj });
  return data;
};

export const usePatchUserPassword: UsePatchUserPasswordProps = () => useMutation<UserPasswordResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: patchUserPassword,
  });
