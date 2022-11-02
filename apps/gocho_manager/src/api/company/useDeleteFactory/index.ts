import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { useDeleteFactoryProps, DeleteFactoryDef, RequestObjDef } from "./type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/admin/companies/${requestObj.factoryId}`);
  return data;
};

export const useDeleteFactory: useDeleteFactoryProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteFactory);
  return mutationResult;
};
