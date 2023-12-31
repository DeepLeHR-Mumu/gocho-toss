import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "../../axiosInstance";
import { managerArrKeyObj, GetManagerArrDef, ResponseObjDef, RequestObjDef } from "./type";
import { managerArrSelector } from "./util";

export const getManagerArr: GetManagerArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/managers`, { params: requestObj });
  return data;
};

export const useManagerArr = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof managerArrSelector>,
    ReturnType<typeof managerArrKeyObj.detail>
  >({
    queryKey: managerArrKeyObj.detail(requestObj),
    queryFn: getManagerArr,
    enabled: Boolean(requestObj.companyId),
    select: (data) => managerArrSelector(data),
  });
