import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { specDetailKeyObj, SpecDetailRequestDef } from "shared-constant/queryKeyFactory/spec/detailKeyObj";
import { selector } from "./util";
import { GetSpecDetailDef } from "./type";

export const getSpecDetail: GetSpecDetailDef = async ({
  queryKey: [
    {
      requestObj: { specId },
    },
  ],
}) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.get(`/specs/${specId}`, {
    headers: { "x-access-token": token },
  });

  return data;
};

export const useSpecDetail = (requestObj: SpecDetailRequestDef) => {
  const queryResult = useQuery(specDetailKeyObj.spec(requestObj), getSpecDetail, {
    select: ({ data }) => {
      return selector(data);
    },
    enabled: Boolean(requestObj.specId),
  });
  return queryResult;
};
