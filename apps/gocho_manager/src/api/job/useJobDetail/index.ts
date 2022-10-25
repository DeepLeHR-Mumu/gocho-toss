import { useQuery } from "@tanstack/react-query";

import { jobDetailKeyObj, JobDetailRequestObjDef } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { GetJobDetailDef } from "./type";
import { selector } from "./util";

export const getJobDetail: GetJobDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NjI1NTAxOCwiZXhwIjoxNjY3NDY0NjE4LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.MCFcFa8nuSC_uYgu35U8-rmN5bG5IGHbA2CjXjMwM94sJ5GPwX6sHE49ObLzPb9jtrMAC4xLYdvSe5CIe_FP_g";
  const { data } = await axiosInstance.get(`/admin/jds/${requestObj.id}`, { headers: { "x-access-token": token } });
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
