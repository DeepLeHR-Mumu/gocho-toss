import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostJobDef, useChangeJobProps, RequestObjDef } from "./type";

export const postJob: PostJobDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, requestObj.dto);
  return data;
};

export const useChangeJob: useChangeJobProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postJob);
  return mutationResult;
};
