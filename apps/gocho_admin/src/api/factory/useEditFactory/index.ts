import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { EditFactoryDef, RequestObjDef, UseEditFactoryProps } from "./type";

const putEditFactory: EditFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.factoryId}`, { ...requestObj.data });
  return data;
};

export const useEditFactory: UseEditFactoryProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(putEditFactory);
};
