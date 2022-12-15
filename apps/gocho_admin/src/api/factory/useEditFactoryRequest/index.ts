import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { factoryDetailKeyObj, FactoryDetailRequestObjDef } from "../keyFactory";
import { GetEditFactoryRequestDef } from "./type";
import { factoryDetailSelector } from "./util";

export const getEditFactoryRequest: GetEditFactoryRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/${requestObj.factoryId}/requests`);
  return data;
};

export const useEditFactoryRequest = (requestObj: FactoryDetailRequestObjDef) => {
  return useQuery(factoryDetailKeyObj.edit(requestObj), getEditFactoryRequest, {
    select: ({ data }) => {
      return factoryDetailSelector(data);
    },
  });
};
