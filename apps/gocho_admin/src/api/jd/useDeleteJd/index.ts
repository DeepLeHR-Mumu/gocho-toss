import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteJdDef, RequestObjDef, useDeleteJdProps } from "./type";

export const deleteJd: DeleteJdDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJd: useDeleteJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteJd });
