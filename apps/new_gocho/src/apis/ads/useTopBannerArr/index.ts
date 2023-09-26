import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "@/constants/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getTopBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/ads/jd-top");
  return data;
};

export const useTopBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.top,
    queryFn: getTopBannerArr,
    select: ({ data }) => selector(data),
  });
