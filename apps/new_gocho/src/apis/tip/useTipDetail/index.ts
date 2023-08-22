import { useQuery } from "@tanstack/react-query";

import { tipDetailKeyObj, TipRequestObjDef } from "@/constants/queryKeyFactory/tip/detailKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetTipDetailDef } from "./type";

export const getTipDetail: GetTipDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/tips/${requestObj.id}`);
  return data;
};

export const useTipDetail = (requestObj: TipRequestObjDef) => {
  return useQuery({
    queryKey: tipDetailKeyObj.detail(requestObj),
    queryFn: getTipDetail,
    select: ({ data }) => {
      return selector(data);
    },
  });
};
