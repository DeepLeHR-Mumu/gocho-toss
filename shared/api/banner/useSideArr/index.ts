import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosManagerInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getSideArr: GetBannerArrDef = async () => {
  const { data } = await axiosManagerInstance.get("/banners?type=S");
  return data;
};

export const useSideArr = () => {
  return useQuery({
    queryKey: bannerArrKeyObj.side,
    queryFn: getSideArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
