import { useQuery } from "@tanstack/react-query";

import { jdCountInfoKeyObj, JdCountInfoRequestObjDef } from "shared-constant/queryKeyFactory/job/jdCountInfoKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdCountInfoDef } from "./type";

export const getJdCountInfo: GetJdCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/jds/${requestObj.id}/count-info`);
  return data;
};

export const useJdCountInfo = (requestObj: JdCountInfoRequestObjDef) => {
  return useQuery({
    queryKey: jdCountInfoKeyObj.countInfo(requestObj),
    queryFn: getJdCountInfo,
    enabled: Boolean(requestObj.id),
    select: (data) => {
      return selector(data);
    },
  });
};
