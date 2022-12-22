import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/type/errorType";

import { axiosInstance } from "../../axiosInteceptor";
import { RequestObjDef, PostFactoryDef } from "./type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/factories", requestObj);
  return data;
};

export const useAddFactory = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(postAddFactory);
