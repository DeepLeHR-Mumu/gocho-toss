import { useQuery } from "@tanstack/react-query";

import { factoryArrKeyObj, FactoryArrRequestObjDef } from "shared-constant/queryKeyFactory/factory/factoryArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetFactoryArrDef } from "./type";
import { selector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/factories", { params: requestObj });
  return data;
};

export const useFactoryArr = (requestObj: FactoryArrRequestObjDef) => {
  return useQuery(factoryArrKeyObj.arr(requestObj), getFactoryArr, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
