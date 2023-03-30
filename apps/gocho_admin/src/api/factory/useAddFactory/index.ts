import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostFactoryDef, useAddFactoryProps } from "./type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/factories", requestObj);
  return data;
};

export const useAddFactory: useAddFactoryProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddFactory });
