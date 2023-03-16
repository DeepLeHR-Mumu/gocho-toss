import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis";

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
  >({
    queryKey: jdDetailKeyObj.detail(requestObj),
    queryFn: getJdDetail,
    select: (data) => jdDetailSelector(data),
    enabled: isLogin,
  });
