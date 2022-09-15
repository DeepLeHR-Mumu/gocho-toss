import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
import {
  AddUserJobBookmarkResponseDef,
  PostAddUserJobBookmarkDef,
  useAddUserJobBookmarkProps,
  RequestObjDef,
} from "./type";

const postAddUserJobBookmark: PostAddUserJobBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.post(`/users/${requestObj?.userId}/job-bookmarks`, {
    headers: {
      "x-access-token": token,
    },

    // TODO: jobId -> jdID
    body: { jobId: `${requestObj?.jobId}` },
  });
  return data;
};

export const useAddUserJobBookmark: useAddUserJobBookmarkProps = () => {
  const mutationResult = useMutation<AddUserJobBookmarkResponseDef, AxiosError, RequestObjDef>(postAddUserJobBookmark);
  return mutationResult;
};
