import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { jobArrKeyObj } from "shared-constant/queryKeyFactory/job/jobArrKeyObj";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { PostJdApplyClickDef, RequestObjDef } from "./type";

const postJdBookmarkToggle: PostJdApplyClickDef = async (requestObj: RequestObjDef) => {
  const { data } = await axiosInstance.post(`jds/${requestObj.jdId}/bookmarks`, null);
  return data;
};

export const useJdBookmarkToggle = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postJdBookmarkToggle,
    onSuccess: () => {
      queryClient.invalidateQueries(jobArrKeyObj.all);
      queryClient.invalidateQueries(jobDetailKeyObj.all);
      queryClient.invalidateQueries(userBookmarkKeyObj.jobAll);
    },
  });
};
