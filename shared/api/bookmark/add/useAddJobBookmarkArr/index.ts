import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";
import { jobBookmarkResObjDef } from "../../type/bookmark";

import { AddJobBookmarkDef, RequestObjDef, ResponseObjDef } from "./type";

interface JobObjDef {
  id: number;
  end_time: number;
  title: string;
  cut: boolean;
  company: { name: string; logo_url: string };
}

const addJobBookmark: AddJobBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/jd-bookmarks/`,
    { id: requestObj.id },
    { headers }
  );
  return data;
};

export const useAddJobBookmarkArr = (jobObj: JobObjDef | undefined) => {
  const queryClient = useQueryClient();
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({
    mutationFn: addJobBookmark,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));

      queryClient.setQueryData<jobBookmarkResObjDef>(
        userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old?.data === null) {
            return {
              data: [jobObj as JobObjDef],
            };
          }
          if (old && jobObj)
            return {
              data: [...old.data, jobObj],
            };
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
};
