import { useQuery } from "@tanstack/react-query";

import { jdCountInfoKeyObj, JdCountInfoRequestObjDef } from "shared-constant/queryKeyFactory/job/jdCountInfoKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdCountInfoDef } from "./type";

export const getJdCountInfo: GetJdCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJdCountInfo = (requestObj: JdCountInfoRequestObjDef) => {
  const queryResult = useQuery(jdCountInfoKeyObj.countInfo(requestObj), getJdCountInfo, {
    enabled: Boolean(requestObj.id),
    select: ( data ) => {
      return selector(data);
    },
  });

  return queryResult;
};
