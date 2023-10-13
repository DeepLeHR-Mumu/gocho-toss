import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, PostPushDef, useAddPushProps } from "./type";

export const postAddPush: PostPushDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/fcm/send", requestObj);
  return data;
};

export const useAddPush: useAddPushProps = () =>
  useMutation<AdminResponseDef, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddPush });
