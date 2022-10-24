import { useQuery } from "@tanstack/react-query";

import { searchJobArrKeyObj, SearchJobRequestObj } from "shared-constant/queryKeyFactory/job/searchJobArrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetJobArrDef } from "./type";
import { selector } from "./util";

export const getUnifiedJobSearchArr: GetJobArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/jds", {
    params: {
      order: "recent",
      filter: "valid",
      limit: 10,
      offset: ((Number(requestObj.offset) || 1) - 1) * 10,
      q: JSON.stringify({ searchWord: requestObj.searchWord }),
    },
  });
  return data;
};

export const useUnifiedJobSearchArr = (requestObj: SearchJobRequestObj) => {
  const queryResult = useQuery(searchJobArrKeyObj.searchArr(requestObj), getUnifiedJobSearchArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
    enabled: Number.isInteger(Number(requestObj.offset)) && typeof requestObj.searchWord !== "undefined",
  });
  return queryResult;
};
