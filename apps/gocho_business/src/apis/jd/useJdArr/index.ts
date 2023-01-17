import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis/useIsRefreshLock";

import { GetJdArrDef, jdArrKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { jdArrSelector } from "./util";

export const getJdArr: GetJdArrDef = async () => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get("/jds", { headers: { "x-access-token": token } });
  return data;
};

export const useJdArr = (isLogin: boolean, requestObj: RequestObjDef) =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof jdArrSelector>>(
    jdArrKeyObj.arr(requestObj),
    getJdArr,
    {
      select: (data) => jdArrSelector(data),
      enabled: isLogin,
    }
  );
