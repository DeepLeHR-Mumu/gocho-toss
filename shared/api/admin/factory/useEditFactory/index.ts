import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { UseEditFactoryProps, EditFactoryDef, RequestObjDef } from "./type";

const EditFactory: EditFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.id}`, { ...requestObj });
  return data;
};

export const useEditFactory: UseEditFactoryProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(EditFactory);
  return mutationResult;
};
