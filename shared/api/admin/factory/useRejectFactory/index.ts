import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";

import { RejectFactoryDef, RequestObjDef, UseRejectFactoryProps } from "./type";

const patchRejectFactory: RejectFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/factories/${requestObj.factoryId}/requests/reject`, {
    type: requestObj.type,
  });
  return data;
};

export const useRejectFactory: UseRejectFactoryProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchRejectFactory);
};
