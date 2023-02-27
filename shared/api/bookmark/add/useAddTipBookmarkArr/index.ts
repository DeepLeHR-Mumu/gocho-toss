import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { AddTipBookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { postingBookmarkResObjDef } from "../../type/bookmark";

interface TipObjDef {
  id: number;
}

const addTipBookmarkArr: AddTipBookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj.userId}/tip-likes/`,
    { id: requestObj.id },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddTipBookmarkArr = (tipObj: TipObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation(addTipBookmarkArr, {
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
  return mutationResult;
};
