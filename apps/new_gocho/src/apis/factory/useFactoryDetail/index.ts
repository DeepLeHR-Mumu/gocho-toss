import { useQuery } from "@tanstack/react-query";

import { factoryDetailKeyObj } from "@/constants/queryKeyFactory/factory/factoryDetailKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetFactoryDetailDef } from "./type";

export const getFactoryDetail: GetFactoryDetailDef = async (factoryId) => {
  const { data } = await axiosInstance.get(`/factories/${factoryId}`);
  return data;
};

export const useFactoryDetail = (factoryId?: number) =>
  useQuery({
    queryKey: factoryId ? factoryDetailKeyObj.detail(factoryId) : undefined,
    queryFn: ({ queryKey: [{ factoryId: queryKeyFactoryId }] }) => getFactoryDetail(queryKeyFactoryId),
    select: ({ data }) => selector(data),
  });
