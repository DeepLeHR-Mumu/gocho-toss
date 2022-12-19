import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { RequestObjDef, GetEditJdRequestDef, jdDetailRequestKeyObj } from "./type";
import { jdDetailSelector } from "./util";

export const getEditJdRequest: GetEditJdRequestDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.id}/requests`);
  return data;
};

export const useEditJdRequest = (requestObj: RequestObjDef) => {
  return useQuery(jdDetailRequestKeyObj.detail(requestObj), getEditJdRequest, {
    select: (data) => {
      return jdDetailSelector(data);
    },
  });
};
