import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosInstance } from "@/api/useAxiosInterceptor";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getMainBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/ads/main-banner");
  return data;
};

export const useMainBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.main,
    queryFn: getMainBannerArr,
    select: ({ data, count }) => selector(data, count),
  });
