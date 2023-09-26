import { useQuery } from "@tanstack/react-query";

import { tipArrKeyObj, TipArrRequestObjDef } from "@/constants/queryKeyFactory/tip/arrKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetTipArrDef } from "./type";
import { selector } from "./util";

export const getTipArr: GetTipArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosNoTokenInstance.get("/tips", {
    params: requestObj,
    headers,
  });
  return data;
};

export const useTipArr = (requestObj: TipArrRequestObjDef) => useQuery({
    queryKey: tipArrKeyObj.tipArr(requestObj),
    queryFn: getTipArr,
    select: ({ data }) => selector(data),
  });
