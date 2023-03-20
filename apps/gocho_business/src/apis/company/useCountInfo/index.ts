import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { countInfoKeyObj, GetCountInfoDef, RequestObjDef, ResponseObjDef } from "./type";
import { countInfoSelector } from "./util";

export const getCountInfo: GetCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/companies/${requestObj.companyId}/count-info`);
  return data;
};

export const useCountInfo = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof countInfoSelector>,
    ReturnType<typeof countInfoKeyObj.detail>
  >({
    queryKey: countInfoKeyObj.detail(requestObj),
    queryFn: getCountInfo,
    enabled: Boolean(requestObj.companyId),
    select: (data) => countInfoSelector(data),
  });
