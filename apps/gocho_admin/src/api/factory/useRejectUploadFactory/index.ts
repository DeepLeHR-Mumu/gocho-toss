import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectUploadFactoryDef, RequestObjDef, UseRejectUploadFactoryProps } from "./type";

const patchRejectUploadFactory: RejectUploadFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/factories/${requestObj.factoryId}/requests/upload-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectUploadFactory: UseRejectUploadFactoryProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectUploadFactory });
