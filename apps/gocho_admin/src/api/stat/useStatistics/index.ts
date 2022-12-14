import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { statisticsKeyObj } from "../keyFactory";

import { GetStatisticsDef } from "./type";
import { selector } from "./util";

export const getStatistics: GetStatisticsDef = async () => {
  const { data } = await axiosInstance.get("/admin/dashboard");
  return data;
};

export const useStatistics = () => {
  return useQuery(statisticsKeyObj.all, getStatistics, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
