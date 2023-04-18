import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosManagerInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getMainArr: GetBannerArrDef = async () => {
  const { data } = await axiosManagerInstance.get("/banners?type=M");
  return data;
};

export const useBannerArr = () => {
  return useQuery({
    queryKey: bannerArrKeyObj.main,
    queryFn: getMainArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
