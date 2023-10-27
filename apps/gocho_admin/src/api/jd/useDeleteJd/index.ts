import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteJdDef, RequestObjDef, useDeleteJdProps } from "./type";

export const deleteJd: DeleteJdDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJd: useDeleteJdProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteJd });
