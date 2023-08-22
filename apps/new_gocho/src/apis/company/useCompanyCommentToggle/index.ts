import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { PostCompanyBookmarkDef, RequestObjDef } from "./type";

const postCompanyCommentToggle: PostCompanyBookmarkDef = async (requestObj) => {
  const { data } = await axiosInstance.post(
    `companies/${requestObj.companyId}/comments/${requestObj.commentId}/${requestObj.type}`,
    null
  );
  return data;
};

export const useCompanyCommentToggle = (requestObj: { companyId: number }) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postCompanyCommentToggle,
    onSuccess: () => {
      queryClient.invalidateQueries(companyCommentArrKeyObj.commentArr({ companyId: requestObj.companyId }));
    },
  });
};
