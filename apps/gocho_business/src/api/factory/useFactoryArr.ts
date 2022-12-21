import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useIsRefreshLock";

import { factoryArrKeyObj, GetFactoryArrDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async () => {
  const { data } = await axiosInstance.get("/factories");
  return data;
};

export const useFactoryArr = () =>
  useQuery(factoryArrKeyObj.arr, getFactoryArr, {
    select: (data) => factoryArrSelector(data),
  });
