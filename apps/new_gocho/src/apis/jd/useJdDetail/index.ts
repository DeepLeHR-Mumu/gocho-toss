import { useQuery } from "@tanstack/react-query";

import { BACKEND_URL } from "shared-constant";

import { jdDetailKeyObj, JdDetailRequestObjDef } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";

import { axiosNoTokenInstance, axiosInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdDetailDef } from "./type";

export const getJdDetail: GetJdDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const [BACKEND_URL_WITHOUT_VERSION] = BACKEND_URL.split("/v1");
  const instance = requestObj.isStatic ? axiosNoTokenInstance : axiosInstance;
  const { data } = await instance.get(`${BACKEND_URL_WITHOUT_VERSION}/v2/jds/${requestObj.id}`);
  return data;
};

export const useJdDetail = (requestObj: JdDetailRequestObjDef) =>
  useQuery({
    queryKey: jdDetailKeyObj.detail(requestObj),
    queryFn: getJdDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.id),
    select: ({ data }) => selector(data),
  });
