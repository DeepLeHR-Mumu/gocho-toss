import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { EndJdDef, RequestObjDef, useEndJdProps } from "./type";

export const patchEndJd: EndJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}`);
  return data;
};

export const useEndJd: useEndJdProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchEndJd);
};
