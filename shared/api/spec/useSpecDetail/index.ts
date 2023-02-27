import { useQuery } from "@tanstack/react-query";

import { specDetailKeyObj, SpecDetailRequestDef } from "shared-constant/queryKeyFactory/spec/detailKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { selector } from "./util";
import { GetSpecDetailDef } from "./type";

export const getSpecDetail: GetSpecDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get(`/specs/${requestObj.specId}`, {
    headers: { "x-access-token": token },
  });

  return data;
};

export const useSpecDetail = (requestObj: SpecDetailRequestDef) => {
  const queryResult = useQuery(specDetailKeyObj.detail(requestObj), getSpecDetail, {
    staleTime: Infinity,
    enabled: Boolean(requestObj.specId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
