import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, DeleteFactoryDef } from "./type";
import { factoryArrKeyObj, ResponseObjDef } from "../useFactoryArr/type";

export const deleteFactory: DeleteFactoryDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/factories/${requestObj.factoryId}`);
  return data;
};

export const useDeleteFactory = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteFactory,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(factoryArrKeyObj.all);
      const previousData = queryClient.getQueryData(factoryArrKeyObj.all);

      queryClient.setQueryData<ResponseObjDef>(factoryArrKeyObj.all, (oldObj) => {
        if (!oldObj?.data)
          return {
            data: [],
            page_result: { total_elements: 0, total_pages: 0, page: 0, size: 0, is_first: false, is_last: false },
          };
        const data = oldObj?.data.filter((old) => old.id !== requestObj.factoryId);
        return { data, page_result: oldObj.page_result };
      });

      return { previousData };
    },
  });
};
