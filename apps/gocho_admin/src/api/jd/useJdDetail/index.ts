import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/axiosInstance";

import { RequestObjDef, GetJdDetailDef, jdDetailKeyObj } from "./type";
import { jdDetailSelector } from "./util";

export const getJdDetail: GetJdDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJdDetail = (requestObj: RequestObjDef) => {
  return useQuery(jdDetailKeyObj.detail(requestObj), getJdDetail, {
    enabled: Boolean(requestObj.id),
    select: (data) => {
      return jdDetailSelector(data);
    },
  });
};
