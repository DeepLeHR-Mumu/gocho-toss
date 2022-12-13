import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";
import { PostEditJobDef, RequestObjDef, useEditJobProps } from "./type";

export const putEditJob: PostEditJobDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, requestObj.dto);
  return data;
};

export const useEditJob: useEditJobProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(putEditJob);
};
