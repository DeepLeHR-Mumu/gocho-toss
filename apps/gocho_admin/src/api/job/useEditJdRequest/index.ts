import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { jobDetailKeyObj, JobDetailRequestObjDef } from "../keyFactory";
import { GetEditJdRequestDef } from "./type";
import { jobDetailSelector } from "./util";

export const getEditJdRequest: GetEditJdRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}/requests`);
  return data;
};

export const useEditJdRequest = (requestObj: JobDetailRequestObjDef) => {
  return useQuery(jobDetailKeyObj.detail(requestObj), getEditJdRequest, {
    select: ({ data }) => {
      return jobDetailSelector(data);
    },
  });
};
