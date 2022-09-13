import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";
import {
  AddUserJobBookmarkResponseDef,
  PostAddUserJobBookmarkDef,
  useAddUserJobBookmarkProps,
  RequestObjDef,
} from "./type";

const postAddUserJobBookmark: PostAddUserJobBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj?.userId}/jd-bookmarks`,
    {
      jdId: requestObj?.jdId,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddUserJobBookmark: useAddUserJobBookmarkProps = () => {
  const mutationResult = useMutation<AddUserJobBookmarkResponseDef, AxiosError, RequestObjDef>(postAddUserJobBookmark);
  return mutationResult;
};
