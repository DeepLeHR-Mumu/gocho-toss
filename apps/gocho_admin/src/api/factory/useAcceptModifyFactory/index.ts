import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptModifyFactoryDef, RequestObjDef, UseAcceptModifyFactoryProps } from "./type";

const putAcceptModifyFactory: AcceptModifyFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.factoryId}/requests/modify-accept`);
  return data;
};

export const useAcceptModifyFactory: UseAcceptModifyFactoryProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptModifyFactory });
