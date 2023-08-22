import { useQuery } from "@tanstack/react-query";

import { jdDetailKeyObj, JdDetailRequestObjDef } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";

import { axiosNoTokenInstance, axiosInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJdDetailDef } from "./type";

export const getJdDetail: GetJdDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const instance = requestObj.isStatic ? axiosNoTokenInstance : axiosInstance;
  const { data } = await instance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJdDetail = (requestObj: JdDetailRequestObjDef) => {
  return useQuery({
    queryKey: jdDetailKeyObj.detail(requestObj),
    queryFn: getJdDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.id),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
