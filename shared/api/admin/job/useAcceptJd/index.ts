import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";

import { UseAcceptJdProps, AcceptJdDef, RequestObjDef } from "./type";

const acceptJd: AcceptJdDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}/requests/accept`, {
    type: requestObj.type,
  });
  return data;
};

export const useAcceptJd: UseAcceptJdProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(acceptJd);
  return mutationResult;
};
