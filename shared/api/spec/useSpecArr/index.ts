import { useQuery } from "@tanstack/react-query";

import { specArrKeyObj, SpecArrInfinityRequestDef } from "shared-constant/queryKeyFactory/spec/arrKeyObj";
import { axiosNewInstance } from "../../axiosInstance";

import { GetSpecArrDef } from "./type";
import { selector } from "./util";

export const getSpecArr: GetSpecArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNewInstance.get(`/specs`, {
    params: requestObj,
  });
  return data;
};

export const useSpecArr = (requestObj: SpecArrInfinityRequestDef) => {
  const queryResult = useQuery({
    queryKey: specArrKeyObj.list(requestObj),
    queryFn: getSpecArr,
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
