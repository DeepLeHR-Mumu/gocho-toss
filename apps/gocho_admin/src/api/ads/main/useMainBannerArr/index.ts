import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "@/constant/queryKeyFactory/banner/bannerArrKeyObj";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetBannerArrDef } from "./type";
import { mainBannerSelector } from "./util";

export const getMainBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/banners/main-banner");
  return data;
};

export const useMainBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.main,
    queryFn: getMainBannerArr,
    select: (data) => mainBannerSelector(data),
  });
