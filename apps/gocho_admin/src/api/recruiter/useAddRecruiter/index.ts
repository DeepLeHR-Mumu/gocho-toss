import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostRecruiterDef, RequestObjDef, useAddRecruiterProps } from "./type";

export const postAddRecruiter: PostRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/managers/register", requestObj);
  return data;
};

export const useAddRecruiter: useAddRecruiterProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAddRecruiter });
