import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteFactoryDef, RequestObjDef, useDeleteFactoryProps } from "./type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/${requestObj.factoryId}`);
  return data;
};

export const useDeleteFactory: useDeleteFactoryProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteFactory });
