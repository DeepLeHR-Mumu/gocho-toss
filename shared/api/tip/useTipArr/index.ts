import { useQuery } from "@tanstack/react-query";

import { tipArrKeyObj, TipArrRequestObjDef } from "shared-constant/queryKeyFactory/tip/arrKeyObj";
import { axiosNewInstance } from "../../axiosInstance";

import { GetTipArrDef } from "./type";
import { selector } from "./util";

export const getTipArr: GetTipArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNewInstance.get("/tips", {
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
