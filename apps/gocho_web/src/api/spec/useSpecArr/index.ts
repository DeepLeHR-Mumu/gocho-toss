import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  specArrKeyObj,
  SpecArrInfinityRequestDef,
} from "@constant/queryKeyFactory/spec/arrKeyObj";

import { GetSpecArrDef } from "./type";
import { selector } from "./util";

export const getSpecArr: GetSpecArrDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const { data } = await axiosInstance.get(`/specs`, {
    params: requestObj,
  });
  return data;
};

export const useSpecArr = (requestObj: SpecArrInfinityRequestDef) => {
  const queryResult = useQuery(specArrKeyObj.list(requestObj), getSpecArr, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
