import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosManagerInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getTopArr: GetBannerArrDef = async () => {
  const { data } = await axiosManagerInstance.get("/banners?type=T");
  return data;
};

export const useTopArr = () => {
  return useQuery({
    queryKey: bannerArrKeyObj.top,
    queryFn: getTopArr,
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
