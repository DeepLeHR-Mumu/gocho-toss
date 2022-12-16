import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { factoryArrKeyObj, GetFactoryArrDef, RequestObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/factories", { params: requestObj });
  return data;
};

export const useFactoryArr = (requestObj: RequestObjDef) => {
  return useQuery(factoryArrKeyObj.arr(requestObj), getFactoryArr, {
    select: (data) => {
      return factoryArrSelector(data);
    },
  });
};
