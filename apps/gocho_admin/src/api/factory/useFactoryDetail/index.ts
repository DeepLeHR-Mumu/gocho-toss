import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { factoryDetailKeyObj, GetFactoryDetailDef, RequestObjDef } from "./type";
import { factoryDetailSelector } from "./util";

export const getFactoryDetail: GetFactoryDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/${requestObj.factoryId}`);
  return data;
};

export const useFactoryDetail = (requestObj: RequestObjDef) => {
  return useQuery(factoryDetailKeyObj.detail(requestObj), getFactoryDetail, {
    select: (data) => {
      return factoryDetailSelector(data);
    },
  });
};
