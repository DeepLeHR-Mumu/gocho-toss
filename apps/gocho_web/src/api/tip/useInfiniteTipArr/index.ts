import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  tipArrKeyObj,
  TipArrRequestObjDef,
} from "@constant/queryKeyFactory/tip/arrKeyObj";

import { GetInfiniteTipArrObjDef } from "./type";
import { selector } from "./util";

export const getInfiniteTipArr: GetInfiniteTipArrObjDef = async ({
  queryKey: [{ requestObj }],
  pageParam,
}) => {
  const { data } = await axiosInstance.get(`/tips`, {
    params: { ...requestObj, offset: pageParam },
  });

  const nextPage = pageParam === undefined ? 0 : pageParam + 4;
  return { ...data, nextPage };
};

export const useInfiniteTipArr = (requestObj: TipArrRequestObjDef) => {
  const queryResult = useInfiniteQuery(
    tipArrKeyObj.infinite(requestObj),
    getInfiniteTipArr,
    {
      getNextPageParam: (responseDef) => {
        return responseDef.nextPage;
      },
      select: (data) => {
        return {
          pages: data.pages.map((page) => {
            return selector(page.data);
          }),
          pageParams: [...data.pageParams],
        };
      },
    }
  );
  return queryResult;
};
