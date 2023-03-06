import { useQuery } from "@tanstack/react-query";

import { jdCountInfoKeyObj, JdCountInfoRequestObjDef } from "shared-constant/queryKeyFactory/job/jdCountInfoKeyObj";

import { axiosNewInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdCountInfoDef } from "./type";

export const getJdCountInfo: GetJdCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNewInstance.get(`/jds/${requestObj.id}/count-info`);
  return data;
};

export const useJdCountInfo = (requestObj: JdCountInfoRequestObjDef) => {
  const queryResult = useQuery({
    queryKey: jdCountInfoKeyObj.countInfo(requestObj),
    queryFn: getJdCountInfo,
    enabled: Boolean(requestObj.id),
    select: (data) => {
      return selector(data);
    },
  });

  return queryResult;
};
