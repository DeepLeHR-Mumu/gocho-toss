import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostJobDef, useAddJobProps, RequestObjDef } from "./type";

export const postJob: PostJobDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post("/admin/jds", requestObj, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useAddJob: useAddJobProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postJob);
  return mutationResult;
};
