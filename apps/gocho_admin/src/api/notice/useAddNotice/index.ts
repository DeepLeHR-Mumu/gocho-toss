import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostNoticeDef, RequestObjDef, useAddNoticeProps } from "./type";

export const postAddNotice: PostNoticeDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/notices", requestObj);
  return data;
};

export const useAddNotice: useAddNoticeProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAddNotice });
