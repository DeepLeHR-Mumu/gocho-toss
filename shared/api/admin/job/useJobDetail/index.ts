import { useQuery } from "@tanstack/react-query";

import { jobDetailKeyObj, JobDetailRequestObjDef } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { axiosNoTokenInstance } from "../../axiosInstance";

import { GetJobDetailDef } from "./type";
import { selector } from "./util";

export const getJobDetail: GetJobDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJobDetail = (requestObj: JobDetailRequestObjDef) => {
  const queryResult = useQuery(jobDetailKeyObj.detail(requestObj), getJobDetail, {
    enabled: Boolean(requestObj.id),
    select: ({ data }) => {
      return selector(data);
    },
  });

  return queryResult;
};
