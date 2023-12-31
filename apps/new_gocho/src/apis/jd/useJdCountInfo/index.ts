import { useQuery } from "@tanstack/react-query";

import { jdCountInfoKeyObj, JdCountInfoRequestObjDef } from "@/constants/queryKeyFactory/jd/jdCountInfoKeyObj";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdCountInfoDef } from "./type";

export const getJdCountInfo: GetJdCountInfoDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/jds/${requestObj.id}/count-info`);
  return data;
};

export const useJdCountInfo = (requestObj: JdCountInfoRequestObjDef) => useQuery({
    queryKey: jdCountInfoKeyObj.countInfo(requestObj),
    queryFn: getJdCountInfo,
    enabled: Boolean(requestObj.id),
    select: (data) => selector(data),
  });
