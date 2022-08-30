import { useQuery } from "react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  mySpecHistoryKeyObj,
  mySpecHistoryRequestObjDef,
} from "@constant/queryKeyFactory/spec/userHistoryKeyObj";

import { selector } from "./util";
import { GetMySpecHistoryArrDef } from "./type";

export const getMySpecHistoryArr: GetMySpecHistoryArrDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj.id}/specs`, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useMySpecHistory = (requestObj: mySpecHistoryRequestObjDef) => {
  const queryResult = useQuery(
    mySpecHistoryKeyObj.list(requestObj),
    getMySpecHistoryArr,
    {
      enabled: Boolean(requestObj.id),
      select: ({ data }) => {
        return selector(data);
      },
    }
  );
  return queryResult;
};
