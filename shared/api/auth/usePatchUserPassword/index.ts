import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import {
  ErrorResponse,
  PatchUserPasswordDef,
  RequestObjDef,
  UsePatchUserPasswordProps,
  UserPasswordResponse,
} from "./type";

const patchUserPassword: PatchUserPasswordDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/users/${requestObj.userId}/password`, { ...requestObj });
  return data;
};

export const usePatchUserPassword: UsePatchUserPasswordProps = () => {
  return useMutation<UserPasswordResponse, ErrorResponse, RequestObjDef>({ mutationFn: patchUserPassword });
};
