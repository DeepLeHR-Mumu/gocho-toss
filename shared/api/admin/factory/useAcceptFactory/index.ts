import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { UseAcceptFactoryProps, AcceptFactoryDef, RequestObjDef } from "./type";

const AcceptFactory: AcceptFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.factoryId}/requests/accept`, {
    type: requestObj.type,
  });
  return data;
};

export const useAcceptFactory: UseAcceptFactoryProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(AcceptFactory);
  return mutationResult;
};
