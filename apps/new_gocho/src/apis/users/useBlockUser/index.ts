import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { BlockUserDef, RequestObjDef } from "./type";

const postBlockUser: BlockUserDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/users/${requestObj.userId}/block`);
  return data;
};

export const useBlockUser = (requestObj: { companyId?: number }) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postBlockUser,
    onSuccess: () => {
      if (requestObj.companyId) {
        queryClient.invalidateQueries(companyCommentArrKeyObj.commentArr({ companyId: requestObj.companyId }));
      }
    },
  });
};
