import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptUploadFactoryDef, RequestObjDef, UseAcceptUploadFactoryProps } from "./type";

const putAcceptUploadFactory: AcceptUploadFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.factoryId}/requests/upload-accept`);
  return data;
};

export const useAcceptUploadFactory: UseAcceptUploadFactoryProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptUploadFactory });
