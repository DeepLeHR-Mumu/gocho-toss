import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostFactoryDef, useAddFactoryProps } from "./type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/factories", requestObj);
  return data;
};

export const useAddFactory: useAddFactoryProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAddFactory });
