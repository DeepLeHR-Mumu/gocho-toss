import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { DeleteTipBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface TipObjDef {
  id: number;
}

const deleteTipBookmarkArr: DeleteTipBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;

  const { data } = await axiosInstance.delete(`/users/${requestObj?.userId}/tip-likes/${requestObj.id}`, {
    headers,
  });
  return data;
};

export const useDeleteTipBookmarkArr = (postingObj: TipObjDef | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTipBookmarkArr,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }));
      queryClient.setQueryData<postingBookmarkResObjDef>(
        userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }),
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
};
