import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { AcceptFactoryDef, RequestObjDef, UseAcceptFactoryProps } from "./type";

const putAcceptFactory: AcceptFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(
    `/factories/${requestObj.factoryId}/requests/accept?type=${requestObj.type}`
  );
  return data;
};

export const useAcceptFactory: UseAcceptFactoryProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(putAcceptFactory);
};
