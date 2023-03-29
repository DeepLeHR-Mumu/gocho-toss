import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RejectJdDef, RequestObjDef, UseRejectJdProps } from "./type";

const patchRejectJd: RejectJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}/requests/reject?type=${requestObj.type}`, {
    reason: requestObj.reason,
  });
  return data;
};

export const useRejectJd: UseRejectJdProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchRejectJd });
