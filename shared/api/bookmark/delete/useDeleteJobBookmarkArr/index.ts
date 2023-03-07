import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { RequestObjDef, DeleteJobBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { jobBookmarkResObjDef } from "../../type/bookmark";

interface JobObjDef {
  id: number;
  end_time: number;
  title: string;
  cut: boolean;
  company: { name: string; logo_url: string };
}

const deleteJobBookmarkArr: DeleteJobBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(`/users/${requestObj?.userId}/jd-bookmarks/${requestObj.id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useDeleteJobBookmarkArr = (jobObj: JobObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({
    mutationFn: deleteJobBookmarkArr,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      queryClient.setQueryData<jobBookmarkResObjDef>(
        userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old && jobObj) {
            if (old?.data === null) {
              return {
                data: null,
              };
            }
            return {
              data: [
                ...old.data.filter((element) => {
                  return jobObj.id !== element.id;
                }),
              ],
            };
          }
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
  return mutationResult;
};
