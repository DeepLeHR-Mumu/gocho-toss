import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { factoryDetailKeyObj, GetFactoryDetailDef, RequestObjDef, ResponseObjDef } from "./type";
import { factoryDetailSelector } from "./util";

export const getFactoryDetail: GetFactoryDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/factories/${requestObj.factoryId}`);
  return data;
};

export const useFactoryDetail = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof factoryDetailSelector>,
    ReturnType<typeof factoryDetailKeyObj.detail>
  >({
    queryKey: factoryDetailKeyObj.detail(requestObj),
    queryFn: getFactoryDetail,
    enabled: Boolean(requestObj.factoryId),
    select: (data) => factoryDetailSelector(data),
  });
