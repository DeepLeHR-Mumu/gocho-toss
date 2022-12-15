import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/axiosInstance";

import { jobArrKeyObj, JobArrRequestObjDef } from "../keyFactory";
import { GetJobArrDef } from "./type";
import { jobArrSelector } from "./util";

export const getJobArr: GetJobArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get("/jds", { params: requestObj });
  return data;
};

export const useJobArr = (requestObj: JobArrRequestObjDef) => {
  return useQuery(jobArrKeyObj.jobArr(requestObj), getJobArr, {
    select: ({ data, count }) => {
      return jobArrSelector(data, count);
    },
  });
};
