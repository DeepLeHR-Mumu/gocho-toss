import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, PostFactoryDef } from "./type";
import { factoryArrKeyObj } from "../useFactoryArr/type";

export const putEditFactory: PostFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.put(`/factories/${requestObj.id}`, requestObj);
  return data;
};

export const useEditFactory = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(putEditFactory, {
    onSuccess: () => {
      queryClient.invalidateQueries(factoryArrKeyObj.all);
    },
  });
};
