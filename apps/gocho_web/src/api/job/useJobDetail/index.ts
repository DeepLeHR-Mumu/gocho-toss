import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  jobDetailKeyObj,
  JobDetailRequestObjDef,
} from "@constant/queryKeyFactory/job/jobDetailKeyObj";

import { selector } from "./util";
import { GetJobDetailDef } from "./type";

export const getJobDetail: GetJobDetailDef = async ({
  queryKey: [{ requestObj }],
}) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJobDetail = (requestObj: JobDetailRequestObjDef) => {
  const queryResult = useQuery(
    jobDetailKeyObj.detail(requestObj),
    getJobDetail,
    {
      enabled: Boolean(requestObj.id),
      select: ({ data }) => {
        return selector(data);
      },
    }
  );

  return queryResult;
};
