import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@/api/useAxiosInterceptor";

import { RequestObjDef, GetJdDetailDef, jdDetailKeyObj } from "./type";
import { jdDetailSelector } from "./util";

export const getJdDetail: GetJdDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/jds/${requestObj.id}`);
  return data;
};

export const useJdDetail = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: jdDetailKeyObj.detail(requestObj),
    queryFn: getJdDetail,
    enabled: Boolean(requestObj.id),
    select: (data) => jdDetailSelector(data),
  });
