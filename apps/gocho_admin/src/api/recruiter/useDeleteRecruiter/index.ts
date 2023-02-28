import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { DeleteRecruiterDef, RequestObjDef, useDeleteRecruiterProps } from "./type";

export const deleteRecruiter: DeleteRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/managers/${requestObj.managerId}`);
  return data;
};

export const useDeleteRecruiter: useDeleteRecruiterProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteRecruiter });
};
