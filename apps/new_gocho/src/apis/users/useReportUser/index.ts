import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { ReportUserDef, RequestObjDef } from "./type";

const postReportUser: ReportUserDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/users/${requestObj.userId}/report`, { reason: requestObj.reason });
  return data;
};

export const useReportUser = (requestObj: { companyId?: number }) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postReportUser,
    onSuccess: () => {
      if (requestObj.companyId) {
        queryClient.invalidateQueries(companyCommentArrKeyObj.commentArr({ companyId: requestObj.companyId }));
      }
    },
  });
};
