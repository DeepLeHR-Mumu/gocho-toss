import { useQuery } from "@tanstack/react-query";

import { specDetailKeyObj, SpecDetailRequestDef } from "@/constants/queryKeyFactory/spec/detailKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetSpecDetailDef } from "./type";

export const getSpecDetail: GetSpecDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/specs/${requestObj.specId}`);
  return data;
};

export const useSpecDetail = (requestObj: SpecDetailRequestDef) => {
  return useQuery({
    queryKey: specDetailKeyObj.detail(requestObj),
    queryFn: getSpecDetail,
    staleTime: Infinity,
    enabled: Boolean(requestObj.specId),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
