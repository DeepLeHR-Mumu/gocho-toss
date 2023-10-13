import { useQuery } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetNoticeDetailDef, noticeDetailKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { noticeDetailSelector } from "./util";

export const getNoticeDetail: GetNoticeDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/notices/${requestObj.noticeId}`, {
    params: requestObj,
  });
  return data;
};

export const useNoticeDetail = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof noticeDetailSelector>,
    ReturnType<typeof noticeDetailKeyObj.detail>
  >({
    queryKey: noticeDetailKeyObj.detail(requestObj),
    queryFn: getNoticeDetail,
    select: (data) => noticeDetailSelector(data),
    enabled: Boolean(requestObj.noticeId),
  });
