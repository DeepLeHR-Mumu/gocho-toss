import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptModifyJdDef, RequestObjDef, UseAcceptModifyJdProps } from "./type";

const putAcceptModifyJd: AcceptModifyJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/accept`);
  return data;
};

export const useAcceptModifyJd: UseAcceptModifyJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: putAcceptModifyJd });
