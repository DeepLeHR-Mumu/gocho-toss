import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { RequestObjDef, DeleteUserInfoDef } from "./type";

const deleteUserInfo: DeleteUserInfoDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/managers/${requestObj.managerId}`);
  return data;
};

export const useDeleteUserInfo = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteUserInfo });
