import { useQuery } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";
import { GetBannerArrDef } from "./type";
import { selector } from "./util";

export const getTopBannerArr: GetBannerArrDef = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosNoTokenInstance.get("/ads/jd-top", { headers });
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
