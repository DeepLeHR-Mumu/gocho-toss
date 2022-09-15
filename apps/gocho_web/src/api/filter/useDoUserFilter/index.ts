import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";
import { ResponseDef } from "@type/api/responseType";

import { PostDoUserFilterDef, useDoUserFilterProps, RequestObjDef } from "./type";

const postDoUserFilter: PostDoUserFilterDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
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
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postDoUserFilter);
  return mutationResult;
};
