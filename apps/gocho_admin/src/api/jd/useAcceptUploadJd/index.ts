import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptUploadJdDef, RequestObjDef, UseAcceptUploadJdProps } from "./type";

const putAcceptUploadJd: AcceptUploadJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/upload-accept`);
  return data;
};

export const useAcceptUploadJd: UseAcceptUploadJdProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: putAcceptUploadJd });
