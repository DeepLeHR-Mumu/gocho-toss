import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptUploadJdDef, RequestObjDef, UseAcceptUploadJdProps } from "./type";

const putAcceptUploadJd: AcceptUploadJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/upload-accept`);
  return data;
};

export const useAcceptUploadJd: UseAcceptUploadJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptUploadJd });
