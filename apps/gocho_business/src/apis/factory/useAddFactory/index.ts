import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "../../axiosInstance";
import { RequestObjDef, PostFactoryDef } from "./type";
import { factoryArrKeyObj } from "../useFactoryArr/type";

export const postAddFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/factories`, requestObj);
  return data;
};

export const useAddFactory = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postAddFactory,
    onSuccess: () => {
      queryClient.invalidateQueries(factoryArrKeyObj.all);
    },
  });
};
