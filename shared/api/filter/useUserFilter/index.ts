import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { filterKeyObj, FilterRequestObjDef } from "@sharedConstant/queryKeyFactory/filter/filterKeyObj";

import { GetUserFilterDef } from "./type";

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
  const queryResult = useQuery(filterKeyObj.get(requestObj), getUserFilter);
  return queryResult;
};
