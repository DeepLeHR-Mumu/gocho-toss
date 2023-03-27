import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { AddTipBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface TipObjDef {
  id: number;
}

const addTipBookmarkArr: AddTipBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/tip-likes/`,
    { id: requestObj.id },
    { headers }
  );
  return data;
};

export const useAddTipBookmarkArr = (tipObj: TipObjDef | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTipBookmarkArr,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }));
      queryClient.setQueryData<postingBookmarkResObjDef>(
        userBookmarkKeyObj.tipBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old?.data === null) {
            return {
              data: [tipObj?.id as number],
            };
          }
          if (old && tipObj) {
            return {
              data: [...old.data, tipObj.id],
            };
          }
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
};
