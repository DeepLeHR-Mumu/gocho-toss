import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../../axiosInstance";
import { jobBookmarkResObjDef } from "../../type/bookmark";

import { ResponseObjDef, AddUserJobBookmarkDef, RequestObjDef } from "./type";

interface jobObjDef {
  id: number;
  title: string;
  end_time: number;
  company: { id: number; name: string };
}

const addUserJobBookmark: AddUserJobBookmarkDef = async (requestObj) => {
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

export const useAddJobUserBookmark = (jobObj: jobObjDef | undefined) => {
  const queryClient = useQueryClient();

  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>(addUserJobBookmark, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(["userJobBookmarkArr", { requestObj: { userId: requestObj.userId } }]);
      const previousTodos = queryClient.getQueryData([
        "userJobBookmarkArr",
        { requestObj: { userId: requestObj.userId } },
      ]);

      queryClient.setQueryData<jobBookmarkResObjDef>(
        ["userJobBookmarkArr", { requestObj: { userId: requestObj.userId } }],

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
