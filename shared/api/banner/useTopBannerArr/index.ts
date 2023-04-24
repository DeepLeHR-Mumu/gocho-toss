import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosManagerInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getTopBannerArr: GetBannerArrDef = async () => {
  const { data } = await axiosManagerInstance.get("/banners?type=T");
  return data;
};

export const useTopBannerArr = () => {
  return useQuery({
    queryKey: bannerArrKeyObj.top,
    queryFn: getTopBannerArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
