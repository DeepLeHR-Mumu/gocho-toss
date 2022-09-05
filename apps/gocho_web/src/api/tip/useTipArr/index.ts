import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { tipArrKeyObj, TipArrRequestObjDef } from "@constant/queryKeyFactory/tip/arrKeyObj";

import { GetTipArrDef } from "./type";
import { selector } from "./util";

export const getTipArr: GetTipArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/tips`, {
    params: requestObj,
  });
  return data;
};

export const useTipArr = (requestObj: TipArrRequestObjDef) => {
  const queryResult = useQuery(tipArrKeyObj.tipArr(requestObj), getTipArr, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
