import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostJobDef, useAddJobProps, RequestObjDef } from "./type";

export const postJob: PostJobDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/admin/jds", requestObj.dto);
  return data;
};

export const useAddJob: useAddJobProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postJob);
  return mutationResult;
};
