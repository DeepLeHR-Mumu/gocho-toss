import { useQuery } from "@tanstack/react-query";

import { tipDetailKeyObj, TipRequestObjDef } from "shared-constant/queryKeyFactory/tip/detailKeyObj";
import { axiosNewInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetTipDetailDef } from "./type";

export const getTipDetail: GetTipDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNewInstance.get(`/tips/${requestObj.id}`);
  return data;
};

export const useTipDetail = (requestObj: TipRequestObjDef) => {
  const queryResult = useQuery(tipDetailKeyObj.detail(requestObj), getTipDetail, {
    select: ({ data }) => {
      return selector(data);
    },
  });

  return queryResult;
};
