import { useQuery } from "@tanstack/react-query";

import { jdCountKeyObj, JdCountRequestObjDef } from "@/constants/queryKeyFactory/jd/jdCountKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetJdCountDef } from "./type";

export const getJdCount: GetJdCountDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/jds/count", { params: requestObj });
  return data;
};

export const useJdCount = (requestObj: JdCountRequestObjDef) => useQuery({
    queryKey: jdCountKeyObj.jdCount(requestObj),
    queryFn: getJdCount,
  });
