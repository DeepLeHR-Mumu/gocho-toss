import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { factoryArrKeyObj, FactoryArrRequestObjDef } from "../keyFactory";
import { GetFactoryArrDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/factories", { params: requestObj });
  return data;
};

export const useFactoryArr = (requestObj: FactoryArrRequestObjDef) => {
  return useQuery(factoryArrKeyObj.arr(requestObj), getFactoryArr, {
    select: ({ data }) => {
      return factoryArrSelector(data);
    },
  });
};
