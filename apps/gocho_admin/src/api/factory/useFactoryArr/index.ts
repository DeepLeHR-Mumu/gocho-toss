import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { factoryArrKeyObj, GetFactoryArrDef, RequestObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/factories", { params: requestObj });
  return data;
};

export const useFactoryArr = (requestObj: RequestObjDef) => {
  return useQuery({
    queryKey: factoryArrKeyObj.arr(requestObj),
    queryFn: getFactoryArr,
    select: (data) => {
      return factoryArrSelector(data);
    },
  });
};
