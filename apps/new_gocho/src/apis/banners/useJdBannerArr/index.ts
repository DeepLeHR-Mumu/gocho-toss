import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "@/constants/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosInstance } from "../../axiosInstance";
import { GetJdBannerArrDef } from "./type";
import { selector } from "./util";

export const getJdBannerArr: GetJdBannerArrDef = async () => {
  const { data } = await axiosInstance.get("/banners/jd-banner");
  return data;
};

export const useJdBannerArr = () =>
  useQuery({
    queryKey: bannerArrKeyObj.jd,
    queryFn: getJdBannerArr,
    select: ({ data }) => selector(data),
  });
