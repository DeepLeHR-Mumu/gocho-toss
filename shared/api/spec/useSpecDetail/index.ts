import { useQuery } from "@tanstack/react-query";

import { specDetailKeyObj, SpecDetailRequestDef } from "shared-constant/queryKeyFactory/spec/detailKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetSpecDetailDef } from "./type";

export const getSpecDetail: GetSpecDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/specs/${requestObj.specId}`, { headers });
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
