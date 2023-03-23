import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { AddPostingBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface PostingObjDef {
  id: number;
}

const addPostingBookmarkArr: AddPostingBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/posting-likes/`,
    { id: requestObj.id },
    { headers }
  );
  return data;
};

export const useAddPostingBookmarkArr = (postingObj: PostingObjDef | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPostingBookmarkArr,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.postingBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
      queryClient.setQueryData<postingBookmarkResObjDef>(
        userBookmarkKeyObj.postingBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old?.data === null) {
            return {
              data: [postingObj?.id as number],
            };
          }
          if (old && postingObj) {
            return {
              data: [...old.data, postingObj.id],
            };
          }
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
};
