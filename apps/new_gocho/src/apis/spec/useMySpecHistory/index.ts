import { useQuery } from "@tanstack/react-query";

import { mySpecHistoryKeyObj, mySpecHistoryRequestObjDef } from "@/constants/queryKeyFactory/spec/userHistoryKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetMySpecHistoryArrDef } from "./type";

export const getMySpecHistoryArr: GetMySpecHistoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/users/${requestObj.id}/specs`);
  return data;
};

export const useMySpecHistory = (requestObj: mySpecHistoryRequestObjDef) => useQuery({
    queryKey: mySpecHistoryKeyObj.list(requestObj),
    queryFn: getMySpecHistoryArr,
    enabled: Boolean(requestObj.id),
    select: ({ data }) => selector(data),
  });
