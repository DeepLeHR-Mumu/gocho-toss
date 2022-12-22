import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, PostFactoryDef } from "./type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/factories", requestObj);
  return data;
};

export const useAddFactory = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(postAddFactory);
