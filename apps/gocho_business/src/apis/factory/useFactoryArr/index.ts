import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { factoryArrKeyObj, GetFactoryArrDef, ResponseObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async () => {
  const { data } = await axiosInstance.get("/factories");
  return data;
};

export const useFactoryArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof factoryArrSelector>>({
    queryKey: factoryArrKeyObj.all,
    queryFn: getFactoryArr,
    select: (data) => factoryArrSelector(data),
  });
