import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "@/constant/queryKeyFactory/banner/bannerArrKeyObj";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetBannerArrDef } from "./type";
import { topBannerSelector } from "./util";

export const getTopBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/banners/jd-top");
  return data;
};

export const useTopBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.top,
    queryFn: getTopBannerArr,
    select: (data) => topBannerSelector(data),
  });
