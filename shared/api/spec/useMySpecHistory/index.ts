import { useQuery } from "@tanstack/react-query";

import {
  mySpecHistoryKeyObj,
  mySpecHistoryRequestObjDef,
} from "shared-constant/queryKeyFactory/spec/userHistoryKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetMySpecHistoryArrDef } from "./type";

export const getMySpecHistoryArr: GetMySpecHistoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj.id}/specs`, { headers });
  return data;
};

export const useMySpecHistory = (requestObj: mySpecHistoryRequestObjDef) => {
  return useQuery({
    queryKey: mySpecHistoryKeyObj.list(requestObj),
    queryFn: getMySpecHistoryArr,
    enabled: Boolean(requestObj.id),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
