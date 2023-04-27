import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@/api/useAxiosInterceptor";

import { factoryArrKeyObj, GetFactoryArrDef, RequestObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get("/factories", { params: requestObj });
  return data;
};

export const useFactoryArr = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: factoryArrKeyObj.arr(requestObj),
    queryFn: getFactoryArr,
    select: (data) => factoryArrSelector(data),
  });
