import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectModifyFactoryDef, RequestObjDef, UseRejectModifyFactoryProps } from "./type";

const patchRejectModifyFactory: RejectModifyFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/factories/${requestObj.factoryId}/requests/modify-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectModifyFactory: UseRejectModifyFactoryProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectModifyFactory });
