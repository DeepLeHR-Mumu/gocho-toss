import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { DeleteJdDef, RequestObjDef, useDeleteJdProps } from "./type";

export const deleteJd: DeleteJdDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJd: useDeleteJdProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteJd);
};
