import { useQuery } from "@tanstack/react-query";

import {
  factoryDetailKeyObj,
  FactoryDetailRequestObjDef,
} from "shared-constant/queryKeyFactory/factory/factoryDetailKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetEditFactoryRequestDef } from "./type";
import { selector } from "./util";

export const getEditFactoryRequest: GetEditFactoryRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/factories", { params: requestObj });
  return data;
};

export const useEditFactoryRequest = (requestObj: FactoryDetailRequestObjDef) => {
  return useQuery(factoryDetailKeyObj.edit(requestObj), getEditFactoryRequest, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
