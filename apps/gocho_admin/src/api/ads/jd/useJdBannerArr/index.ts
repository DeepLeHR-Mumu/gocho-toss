import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetBannerArrDef } from "./type";
import { jdBannerSelector } from "./util";

export const getJdBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/ads/jd-banner");
  return data;
};

export const useJdBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.jd,
    queryFn: getJdBannerArr,
    select: (data) => jdBannerSelector(data),
  });
