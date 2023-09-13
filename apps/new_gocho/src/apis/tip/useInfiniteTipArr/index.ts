import { useInfiniteQuery } from "@tanstack/react-query";
import { tipArrKeyObj, TipArrRequestObjDef } from "@/constants/queryKeyFactory/tip/arrKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { GetInfiniteTipArrObjDef } from "./type";
import { selector } from "./util";

export const getInfiniteTipArr: GetInfiniteTipArrObjDef = async ({ queryKey: [{ requestObj }], pageParam }) => {
  const { data } = await axiosNoTokenInstance.get("/tips", {
    params: { ...requestObj, offset: pageParam },
  });
  const nextPage = pageParam === undefined ? 0 : pageParam + 4;

  return { ...data, nextPage };
};

export const useInfiniteTipArr = (requestObj: TipArrRequestObjDef) => useInfiniteQuery({
    queryKey: tipArrKeyObj.infinite(requestObj),
    queryFn: getInfiniteTipArr,
    getNextPageParam: (responseObj) => responseObj.data.length !== 0 ? responseObj.nextPage : undefined,
    select: (data) => ({
        pages: data.pages.map((page) => selector(page.data)),
        pageParams: [...data.pageParams],
      }),
  });
