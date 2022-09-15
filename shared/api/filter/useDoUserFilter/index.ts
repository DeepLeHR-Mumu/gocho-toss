import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import { filterKeyObj, FilterRequestObjDef } from "@sharedConstant/queryKeyFactory/filter/filterKeyObj";

import { PostDoUserFilterDef } from "./type";

const postDoUserFilter: PostDoUserFilterDef = async ({ queryKey: [{ requestObj }] }) => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.post(`/users/${requestObj?.userId}/filter`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useDoUserFilter = (requestObj: FilterRequestObjDef) => {
  const mutationResult = useMutation(filterKeyObj.post(requestObj), postDoUserFilter);
  return mutationResult;
};
