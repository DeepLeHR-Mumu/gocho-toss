import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";

import { RequestObjDef, AddNoticeViewDef, UseAddNoticeViewProps } from "./type";

const addNoticeView: AddNoticeViewDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/notices/${requestObj.noticeId}/view`);
  return data;
};

export const useAddNoticeView: UseAddNoticeViewProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: addNoticeView });
