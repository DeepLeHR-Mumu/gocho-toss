import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectModifyJdDef, RequestObjDef, UseRejectModifyJdProps } from "./type";

const patchRejectModifyJd: RejectModifyJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}/requests/modify-reject`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectModifyJd: UseRejectModifyJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectModifyJd });
