import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import { filterKeyObj, FilterRequestObjDef } from "@constant/queryKeyFactory/filter/filterKeyObj";

import { GetUserFilterDef } from "./type";
import { selector } from "./util";

const getUserFilter: GetUserFilterDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/filter`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useUserFilter = (requestObj: FilterRequestObjDef) => {
  const queryResult = useQuery(filterKeyObj.all(requestObj), getUserFilter, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
