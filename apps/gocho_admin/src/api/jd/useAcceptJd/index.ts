import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptJdDef, RequestObjDef, UseAcceptJdProps } from "./type";

const putAcceptJd: AcceptJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/accept?type=${requestObj.type}`);
  return data;
};

export const useAcceptJd: UseAcceptJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptJd });
