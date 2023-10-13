import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { EndJdDef, RequestObjDef, useEndJdProps } from "./type";

export const patchEndJd: EndJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}`);
  return data;
};

export const useEndJd: useEndJdProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: patchEndJd });
