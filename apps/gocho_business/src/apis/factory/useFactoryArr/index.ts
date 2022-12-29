import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { factoryArrKeyObj, GetFactoryArrDef, ResponseObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async () => {
  const { data } = await axiosInstance.get("/factories");
  return data;
};

export const useFactoryArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof factoryArrSelector>>(
    factoryArrKeyObj.all,
    getFactoryArr,
    {
      select: (data) => factoryArrSelector(data),
    }
  );
