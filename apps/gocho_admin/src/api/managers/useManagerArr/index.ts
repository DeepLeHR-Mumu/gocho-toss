import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { managerArrKeyObj, GetManagerArrDef, RequestObjDef } from "./type";
import { managerArrSelector } from "./util";

export const getManagerArr: GetManagerArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/managers", { params: requestObj });
  return data;
};

export const useManagerArr = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: managerArrKeyObj.arr(requestObj),
    queryFn: getManagerArr,
    select: (data) => managerArrSelector(data),
  });
