import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { jobDetailKeyObj, JobDetailRequestObjDef } from "../keyFactory";
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
