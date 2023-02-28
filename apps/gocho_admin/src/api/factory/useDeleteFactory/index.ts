import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { DeleteFactoryDef, RequestObjDef, useDeleteFactoryProps } from "./type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/${requestObj.factoryId}`);
  return data;
};

export const useDeleteFactory: useDeleteFactoryProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteFactory });
};
