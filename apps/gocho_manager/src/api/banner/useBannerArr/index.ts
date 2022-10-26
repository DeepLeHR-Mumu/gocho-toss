import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj, BannerArrRequestObjDef } from "@constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosInstance } from "@api/axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getBannerArr: GetBannerArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/admin/banners", { params: requestObj });
  return data;
};

export const useBannerArr = (requestObj: BannerArrRequestObjDef) => {
  return useQuery(bannerArrKeyObj.bannerArr(requestObj), getBannerArr, {
    select: ({ data, count }) => {
      return selector(data, count, requestObj.type);
    },
  });
};
