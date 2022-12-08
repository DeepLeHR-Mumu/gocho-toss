import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { UseRejectFactoryProps, RejectFactoryDef, RequestObjDef } from "./type";

const RejectFactory: RejectFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/factories/${requestObj.factoryId}`, { type: requestObj.type });
  return data;
};

export const useRejectFactory: UseRejectFactoryProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(RejectFactory);
  return mutationResult;
};
