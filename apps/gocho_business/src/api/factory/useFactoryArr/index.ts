import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/api/axiosInteceptor";
import { ErrorResponseDef } from "@/type/errorType";

import { factoryArrKeyObj, GetFactoryArrDef, ResponseObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async () => {
  const { data } = await axiosInstance.get("/factories");
  return data;
};

export const useFactoryArr = (isLogin: boolean) =>
  // 에러 내부에 body를 추적해야하는 경우 AxiosError<타입>으로 지정하기
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof factoryArrSelector>>(
    factoryArrKeyObj.all,
    getFactoryArr,
    {
      select: (data) => factoryArrSelector(data),
      enabled: isLogin,
    }
  );
