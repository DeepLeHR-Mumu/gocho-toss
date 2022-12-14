import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { EndJobDef, RequestObjDef, useEndJobProps } from "./type";

export const patchEndJob: EndJobDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}`);
  return data;
};

export const useEndJob: useEndJobProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchEndJob);
};
