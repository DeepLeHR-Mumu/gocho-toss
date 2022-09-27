import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";
import { jobBookmarkResObjDef } from "../../type/bookmark";

import { ResponseObjDef, AddJobBookmarkDef, RequestObjDef } from "./type";

interface JobObjDef {
  id: number;
  end_time: number;
  title: string;
  cut: boolean;
  company: { id: number; name: string; logo_url: string };
}

const addJobBookmark: AddJobBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/jd-bookmarks/`,
    { elemId: requestObj.elemId },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddJobBookmarkArr = (jobObj: JobObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>(addJobBookmark, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));

      queryClient.setQueryData<jobBookmarkResObjDef>(
        userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }),
        (old) => {
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
  return mutationResult;
};
