import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { companyArrKeyObj } from "@/constants/queryKeyFactory/company/arrKeyObj";
import { companyDetailKeyObj } from "@/constants/queryKeyFactory/company/companyDetailKeyObj";
import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";
import { jdDetailKeyObj } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";
import { companyKeywordArrKeyObj } from "@/apis/keyword/useCompanyKeywordArr/type";

import { axiosInstance } from "../../axiosInstance";
import { PostCompanyBookmarkDef, RequestObjDef } from "./type";

const postCompanyBookmarkToggle: PostCompanyBookmarkDef = async (requestObj: RequestObjDef) => {
  const { data } = await axiosInstance.post(`companies/${requestObj.companyId}/bookmarks`, null);
  return data;
};

export const useCompanyBookmarkToggle = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postCompanyBookmarkToggle,
    onSuccess: () => {
      queryClient.invalidateQueries(companyKeywordArrKeyObj.all);
      queryClient.invalidateQueries(companyArrKeyObj.all);
      queryClient.invalidateQueries(companyDetailKeyObj.all);
      queryClient.invalidateQueries(userBookmarkKeyObj.companyAll);
      queryClient.invalidateQueries(jdDetailKeyObj.all);
      queryClient.invalidateQueries(companyKeywordArrKeyObj.all);
    },
  });
};
