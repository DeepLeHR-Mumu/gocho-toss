import { useQuery } from "@tanstack/react-query";
import { CompanyArrRequestDef, companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";

import { axiosInstance } from "../../axiosInstance";

import { GetCompanyArrDef } from "./type";
import { selector } from "./util";

export const getCompanyArr: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NjI1NTAxOCwiZXhwIjoxNjY3NDY0NjE4LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.MCFcFa8nuSC_uYgu35U8-rmN5bG5IGHbA2CjXjMwM94sJ5GPwX6sHE49ObLzPb9jtrMAC4xLYdvSe5CIe_FP_g";
  const { data } = await axiosInstance.get(`/admin/companies`, {
    headers: { "x-access-token": token },
    params: requestObj,
  });
  return data;
};

export const useCompanyArr = (requestObj: CompanyArrRequestDef) => {
  const queryResult = useQuery(companyArrKeyObj.companyArr(requestObj), getCompanyArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
  return queryResult;
};
