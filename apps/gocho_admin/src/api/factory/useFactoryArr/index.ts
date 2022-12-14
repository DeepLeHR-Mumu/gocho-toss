import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { factoryArrKeyObj, FactoryArrRequestObjDef } from "../keyFactory";
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
