import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  tipDetailKeyObj,
  TipRequestObjDef,
} from "@constant/queryKeyFactory/tip/detailKeyObj";

import { selector } from "./util";
import { GetTipDetailDef } from "./type";

export const getTipDetail: GetTipDetailDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const { data } = await axiosInstance.get(`/tips/${requestObj.id}`);
  return data;
};

export const useTipDetail = (requestObj: TipRequestObjDef) => {
  const queryResult = useQuery(
    tipDetailKeyObj.detail(requestObj),
    getTipDetail,
    {
      select: ({ data }) => {
        return selector(data);
      },
    }
  );

  return queryResult;
};
