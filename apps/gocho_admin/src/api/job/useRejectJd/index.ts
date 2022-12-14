import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { RejectJdDef, RequestObjDef, UseRejectJdProps } from "./type";

const patchRejectJd: RejectJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/companies/${requestObj.jdId}/requests/reject`, {
    type: requestObj.type,
  });
  return data;
};

export const useRejectJd: UseRejectJdProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchRejectJd);
};
