import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { jobDetailKeyObj, JobDetailRequestObjDef } from "../keyFactory";
import { GetEditJdRequestDef } from "./type";
import { selector } from "./util";

export const getEditJdRequest: GetEditJdRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}/requests`);
  return data;
};

export const useEditJdRequest = (requestObj: JobDetailRequestObjDef) => {
  return useQuery(jobDetailKeyObj.detail(requestObj), getEditJdRequest, {
    select: ({ data }) => {
      return selector(data);
    },
  });
};
