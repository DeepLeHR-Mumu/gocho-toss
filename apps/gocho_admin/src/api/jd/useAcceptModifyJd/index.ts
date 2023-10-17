import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { AcceptModifyJdDef, RequestObjDef, UseAcceptModifyJdProps } from "./type";

const putAcceptModifyJd: AcceptModifyJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/modify-accept`);
  return data;
};

export const useAcceptModifyJd: UseAcceptModifyJdProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: putAcceptModifyJd });
