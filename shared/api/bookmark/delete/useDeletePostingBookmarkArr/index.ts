import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { DeletePostingBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface PostingObjDef {
  id: number;
}

const deletePostingBookmarkArr: DeletePostingBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(`/users/${requestObj?.userId}/posting-likes/${requestObj.id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useDeletePostingBookmarkArr = (postingObj: PostingObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation(deletePostingBookmarkArr, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.postingBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      queryClient.setQueryData<postingBookmarkResObjDef>(
        userBookmarkKeyObj.postingBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old?.data === null) {
            return {
              data: null,
            };
          }
          if (old && postingObj) {
            return {
              data: [
                ...old.data.filter((element) => {
                  return postingObj.id !== element;
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
