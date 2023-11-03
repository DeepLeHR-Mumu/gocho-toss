import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import { jdArrKeyObj, JdArrRequestObjDef } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetJdArrDef } from "./type";
import { selector } from "./util";

export const getJdArr: GetJdArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const { data } = await axiosInstance.get(`${BACKEND_URL_WITHOUT_VERSION}/v2/jds`, { params: { ...requestObj } });
  return data;
};

export const useJdArr = (requestObj: JdArrRequestObjDef) =>
  useQuery({
    queryKey: jdArrKeyObj.jdArr(requestObj),
    queryFn: getJdArr,
    select: ({ data, page_result }) => selector(data, page_result),
    enabled: Boolean(requestObj.page),
  });
