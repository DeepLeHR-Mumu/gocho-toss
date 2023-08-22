import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";

import { PostDoUserFilterDef, RequestObjDef, useDoUserFilterProps } from "./type";

const postDoUserFilter: PostDoUserFilterDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/users/${requestObj?.userId}/filter`, {
    q: requestObj?.q,
  });
  return data;
};

export const useDoUserFilter: useDoUserFilterProps = () => {
  const queryClient = useQueryClient();
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({
    mutationFn: postDoUserFilter,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
