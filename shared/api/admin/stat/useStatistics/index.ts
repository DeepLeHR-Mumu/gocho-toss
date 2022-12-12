import { useQuery } from "@tanstack/react-query";

import { statisticsKeyObj } from "../keyFactory";
import { axiosInstance } from "../../axiosInstance";

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
