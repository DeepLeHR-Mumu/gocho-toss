import { useQuery } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetNoticeArrDef, noticeArrKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { noticeArrSelector } from "./util";

export const getNoticeArr: GetNoticeArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/notices", {
    params: requestObj,
  });
  return data;
};

export const useNoticeArr = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof noticeArrSelector>,
    ReturnType<typeof noticeArrKeyObj.arr>
  >({
    queryKey: noticeArrKeyObj.arr(requestObj),
    queryFn: getNoticeArr,
    select: (data) => noticeArrSelector(data),
    enabled: !Number.isNaN(requestObj.page),
  });
