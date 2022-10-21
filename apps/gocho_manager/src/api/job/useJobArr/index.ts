import { useQuery } from "@tanstack/react-query";

import { jobArrKeyObj, JobArrRequestObjDef } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { axiosInstance } from "@api/axiosInstance";

import { GetJobArrDef } from "./type";
import { selector } from "./util";

export const getJobArr: GetJobArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NjI1NTAxOCwiZXhwIjoxNjY3NDY0NjE4LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.MCFcFa8nuSC_uYgu35U8-rmN5bG5IGHbA2CjXjMwM94sJ5GPwX6sHE49ObLzPb9jtrMAC4xLYdvSe5CIe_FP_g";
  const { data } = await axiosInstance.get("/admin/jds", {
    headers: { "x-access-token": token },
    params: requestObj,
  });
  return data;
};

export const useJobArr = (requestObj: JobArrRequestObjDef) => {
  return useQuery(jobArrKeyObj.jobArr(requestObj), getJobArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
