import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { DeleteCompanyCommentDef, RequestObjDef } from "./type";

const deleteCompanyComment: DeleteCompanyCommentDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`companies/${requestObj.companyId}/comments/${requestObj.commentId}`);
  return data;
};

export const useDeleteCompanyComment = (requestObj: { companyId?: number }) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: deleteCompanyComment,
    onSuccess: () => {
      if (requestObj.companyId) {
        queryClient.invalidateQueries(companyCommentArrKeyObj.commentArr({ companyId: requestObj.companyId }));
      }
    },
  });
};
