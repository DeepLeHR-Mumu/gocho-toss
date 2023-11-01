import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { GetJdStatisticsDef, jdStatisticsKeyObj } from "./type";
import { selector } from "./util";

export const getJdStatistics: GetJdStatisticsDef = async (jdId: number) => {
  const { data } = await axiosInstance.get(`/jds/${jdId}/statistics`);
  return data;
};

export const useJdStatistics = (jdId?: number) =>
  useQuery({
    queryKey: jdId ? jdStatisticsKeyObj.statistics(jdId) : undefined,
    queryFn: ({ queryKey: [{ jdId: queryKeyJdId }] }) => getJdStatistics(queryKeyJdId),
    select: ({ data }) => selector(data),
  });
