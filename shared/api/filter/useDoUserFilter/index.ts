import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";

import { PostDoUserFilterDef, useDoUserFilterProps, RequestObjDef } from "./type";

const postDoUserFilter: PostDoUserFilterDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.put(
    `/users/${requestObj?.userId}/filter`,
    {
      q: requestObj?.q,
    },
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const useDoUserFilter: useDoUserFilterProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDoUserFilter });
  return mutationResult;
};
