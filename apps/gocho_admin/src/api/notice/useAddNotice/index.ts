import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostNoticeDef, RequestObjDef, useAddNoticeProps } from "./type";

export const postAddNotice: PostNoticeDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/notices", requestObj);
  return data;
};

export const useAddNotice: useAddNoticeProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddNotice });
