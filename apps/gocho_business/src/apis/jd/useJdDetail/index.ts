import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis/useIsRefreshLock";

import { ResponseObjDef, RequestObjDef, GetJdDetailDef, jdDetailKeyObj } from "./type";
import { jdDetailSelector } from "./util";

export const getJdDetail: GetJdDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJdDetail = (isLogin: boolean, requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof jdDetailSelector>,
    ReturnType<typeof jdDetailKeyObj.detail>
  >(jdDetailKeyObj.detail(requestObj), getJdDetail, {
    select: (data) => jdDetailSelector(data),
    enabled: isLogin,
  });
