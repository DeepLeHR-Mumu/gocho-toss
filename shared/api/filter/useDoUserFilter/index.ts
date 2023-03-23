import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";

import { PostDoUserFilterDef, RequestObjDef, useDoUserFilterProps } from "./type";

const postDoUserFilter: PostDoUserFilterDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.put(
    `/users/${requestObj?.userId}/filter`,
    {
      q: requestObj?.q,
    },
    { headers }
  );
  return data;
};

export const useDoUserFilter: useDoUserFilterProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDoUserFilter });
};
