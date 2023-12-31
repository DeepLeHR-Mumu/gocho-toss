import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { jdArrKeyObj, ResponseObjDef } from "../useJdArr/type";
import { axiosInstance } from "../../axiosInstance";
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
        if (!oldObj?.data)
          return {
            data: [],
            page_result: { total_elements: 0, total_pages: 0, page: 0, size: 0, is_first: false, is_last: false },
          };
        const data = oldObj?.data.filter((old) => old.id !== requestObj.jdId);
        return { data, page_result: oldObj.page_result };
      });

      return { previousData };
    },
  });
};
