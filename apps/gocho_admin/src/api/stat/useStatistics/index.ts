import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { GetStatisticsDef, statisticsKeyObj } from "./type";
import { statSelector } from "./util";

export const getStatistics: GetStatisticsDef = async () => {
  const { data } = await axiosInstance.get("/admin/dashboard");
  return data;
};

export const useStatistics = () => {
  return useQuery(statisticsKeyObj.all, getStatistics, {
    select: (data) => {
      return statSelector(data);
    },
  });
};
