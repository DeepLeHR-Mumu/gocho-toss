import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";
import { jdArrKeyObj } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";
import { jdDetailKeyObj } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";

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
      queryClient.invalidateQueries(jdArrKeyObj.all);
      queryClient.invalidateQueries(jdDetailKeyObj.all);
      queryClient.invalidateQueries(userBookmarkKeyObj.jdAll);
    },
  });
};
