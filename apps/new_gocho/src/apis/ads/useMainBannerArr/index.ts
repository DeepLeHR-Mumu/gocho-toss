import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "@/constants/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getMainBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosNoTokenInstance.get("/ads/main-banner");
  return data;
};

export const useMainBannerArr = () => useQuery({
    queryKey: bannerArrKeyObj.main,
    queryFn: getMainBannerArr,
    select: ({ data, count }) => selector(data, count),
  });
