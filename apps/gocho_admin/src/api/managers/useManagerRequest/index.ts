import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { managerRequestKeyObj, GetManagerRequestDef, RequestObjDef } from "./type";
import { managerRequestSelector } from "./util";

export const getManagerRequest: GetManagerRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/managers/${requestObj.managerId}/requests`);
  return data;
};

export const useManagerRequest = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: managerRequestKeyObj.arr(requestObj),
    queryFn: getManagerRequest,
    select: (data) => managerRequestSelector(data),
  });
