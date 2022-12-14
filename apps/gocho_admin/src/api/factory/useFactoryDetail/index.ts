import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { factoryDetailKeyObj, FactoryDetailRequestObjDef } from "../keyFactory";
import { GetFactoryDetailDef } from "./type";
import { selector } from "./util";

export const getFactoryDetail: GetFactoryDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/${requestObj.factoryId}`);
  return data;
};

export const useFactoryDetail = (requestObj: FactoryDetailRequestObjDef) => {
  return useQuery(factoryDetailKeyObj.detail(requestObj), getFactoryDetail, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
