import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { ErrorResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, DeleteNoticeDef } from "./type";

export const deleteNotice: DeleteNoticeDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/notices/${requestObj.noticeId}`);
  return data;
};

export const useDeleteNotice = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: deleteNotice });
