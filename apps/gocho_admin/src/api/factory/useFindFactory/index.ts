import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { findFactoryKeyObj, GetFindFactoryDef, RequestObjDef } from "./type";
import { findFactorySelector } from "./util";

export const getFindFactory: GetFindFactoryDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/find`, { params: requestObj });
  return data;
};

export const useFindFactory = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: findFactoryKeyObj.arr(requestObj),
    queryFn: getFindFactory,
    enabled: Boolean(requestObj.companyId),
    select: (data) => findFactorySelector(data),
  });
