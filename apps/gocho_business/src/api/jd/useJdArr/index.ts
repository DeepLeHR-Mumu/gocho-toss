import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/api/axiosInteceptor";
import { ErrorResponseDef } from "@/type/errorType";

import { GetJdArrDef, jdArrKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { jdArrSelector } from "./util";

export const getJdArr: GetJdArrDef = async () => {
  const { data } = await axiosInstance.get("/jds", {
    headers: {
      "x-access-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VySW5mbyIsImlkIjowLCJjb21wYW55X2lkIjoxMDI3LCJjb21wYW55X25hbWUiOiLqs6DstIjrjIDsobjri7fsu7QiLCJlbWFpbCI6InRlZW1vQGRlZXBsZWhyLmNvbSIsIm5hbWUiOiLti7DrqqgiLCJkZXBhcnRtZW50Ijoi6rCc67Cc7YyAIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsInR5cGUiOjIsImlhdCI6MTY3MDk5OTIyNCwiZXhwIjoxNjcyMjA4ODI0LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.fQV2TMhgzRwC3nfrjDU0YxJIBL27FeGA5_Z5ABuGlk2db4jTTfsCSJEs6f3-SwBRMmOtMxYVCVBCUl2FQTG3gg",
    },
  });
  return data;
};

export const useJdArr = (isLogin: boolean, requestObj: RequestObjDef) =>
  // 에러 내부에 body를 추적해야하는 경우 AxiosError<타입>으로 지정하기
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof jdArrSelector>>(
    jdArrKeyObj.arr(requestObj),
    getJdArr,
    {
      select: (data) => jdArrSelector(data),
      enabled: isLogin,
    }
  );
