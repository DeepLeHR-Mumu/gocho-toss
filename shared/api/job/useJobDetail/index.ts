import { useQuery } from "@tanstack/react-query";

import { jobDetailKeyObj, JobDetailRequestObjDef } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";

import { axiosNoTokenInstance, axiosInstance } from "../../axiosInstance";
import { selector } from "./util";
import { GetJobDetailDef } from "./type";

export const getJobDetail: GetJobDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const instance = requestObj.isStatic ? axiosNoTokenInstance : axiosInstance;
  const { data } = await instance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJobDetail = (requestObj: JobDetailRequestObjDef) => {
  return useQuery({
    queryKey: jobDetailKeyObj.detail(requestObj),
    queryFn: getJobDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.id),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
