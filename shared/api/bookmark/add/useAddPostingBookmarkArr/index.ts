import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { AddPostingBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface PostingObjDef {
  id: number;
}

const addPostingBookmarkArr: AddPostingBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/posting-likes/`,
    { id: requestObj.id },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddPostingBookmarkArr = (postingObj: PostingObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation(addPostingBookmarkArr, {
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
  return mutationResult;
};
