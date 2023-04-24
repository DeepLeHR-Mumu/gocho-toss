import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

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
      queryClient.invalidateQueries(companyArrKeyObj.all);
      queryClient.invalidateQueries(companyDetailKeyObj.all);
      queryClient.invalidateQueries(userBookmarkKeyObj.companyAll);
    },
  });
};
