import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { factoryEditKeyObj, GetEditFactoryRequestDef, RequestObjDef } from "./type";
import { factoryDetailSelector } from "./util";

export const getEditFactoryRequest: GetEditFactoryRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/${requestObj.factoryId}/requests`);
  return data;
};

export const useEditFactoryRequest = (requestObj: RequestObjDef) => {
  return useQuery({
    queryKey: factoryEditKeyObj.edit(requestObj),
    queryFn: getEditFactoryRequest,
    select: (data) => {
      return factoryDetailSelector(data);
    },
  });
};
