import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/type/errorType";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, DeleteFactoryDef } from "./type";
import { factoryArrKeyObj } from "../useFactoryArr/type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/factories${requestObj.factoryId}`);
  return data;
};

export const useDeleteFactory = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(deleteFactory, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(factoryArrKeyObj.all);
      const previousData = queryClient.getQueryData(factoryArrKeyObj.all);

      queryClient.setQueriesData(
        factoryArrKeyObj.all,
        () => (valueArr: { id: number }[]) => valueArr.filter((value) => requestObj.factoryId !== value.id)
      );
      return { previousData };
    },
  });
};
