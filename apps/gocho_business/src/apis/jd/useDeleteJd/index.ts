import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { jdArrKeyObj, ResponseObjDef } from "../useJdArr/type";
import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, DeleteJdDef } from "./type";

export const deleteJd: DeleteJdDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJd = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteJd,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(jdArrKeyObj.all);
      const previousData = queryClient.getQueryData(jdArrKeyObj.all);

      queryClient.setQueryData<ResponseObjDef>(jdArrKeyObj.all, (oldObj) => {
        if (!oldObj?.data) return { data: [], count: 0 };
        const data = oldObj?.data.filter((old) => old.id !== requestObj.jdId);
        const count = oldObj.count - 1;
        return { data, count };
      });

      return { previousData };
    },
  });
};
