import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { PostRecruiterDef, RequestObjDef, useAddRecruiterProps } from "./type";

export const postAddRecruiter: PostRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/managers/register", requestObj);
  return data;
};

export const useAddRecruiter: useAddRecruiterProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddRecruiter });
};
