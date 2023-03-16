import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis";

import { GetJdArrDef, jdArrKeyObj, RequestObjDef, ResponseObjDef } from "./type";
import { jdArrSelector } from "./util";

export const getJdArr: GetJdArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get("/jds", { params: requestObj, headers: { "x-access-token": token } });
  return data;
};

export const useJdArr = (isLogin: boolean, requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof jdArrSelector>,
    ReturnType<typeof jdArrKeyObj.arr>
  >({
    queryKey: jdArrKeyObj.arr(requestObj),
    queryFn: getJdArr,
    select: (data) => jdArrSelector(data),
    enabled: isLogin,
  });
