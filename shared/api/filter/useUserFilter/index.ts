import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { filterKeyObj, FilterRequestObjDef } from "shared-constant/queryKeyFactory/filter/filterKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { GetUserFilterDef } from "./type";
import { selector } from "./util";

const getUserFilter: GetUserFilterDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/users/${requestObj?.userId}/filter`, { headers });
  return data;
};

export const useUserFilter = (requestObj: FilterRequestObjDef) => {
  return useQuery({
    queryKey: filterKeyObj.all(requestObj),
    queryFn: getUserFilter,
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null;
      }
      return error;
    },
    enabled: Boolean(requestObj.userId),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
