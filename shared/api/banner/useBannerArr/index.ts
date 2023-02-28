import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj, BannerArrRequestObjDef } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosManagerInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getBannerArr: GetBannerArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosManagerInstance.get("/banners", { params: requestObj });
  return data;
};

export const useBannerArr = (requestObj: BannerArrRequestObjDef) => {
  return useQuery({
    queryKey: bannerArrKeyObj.bannerArr(requestObj),
    queryFn: getBannerArr,
    select: ({ data, count }) => {
      return selector(data, count, requestObj.type);
    },
  });
};
