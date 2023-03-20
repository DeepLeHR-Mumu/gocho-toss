import { useQuery } from "@tanstack/react-query";

import { tipArrKeyObj, TipArrRequestObjDef } from "shared-constant/queryKeyFactory/tip/arrKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetTipArrDef } from "./type";
import { selector } from "./util";

export const getTipArr: GetTipArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get("/tips", {
    params: requestObj,
  });
  return data;
};

export const useTipArr = (requestObj: TipArrRequestObjDef) => {
  return useQuery({
    queryKey: tipArrKeyObj.tipArr(requestObj),
    queryFn: getTipArr,
    select: ({ data }) => {
      return selector(data);
    },
  });
};
