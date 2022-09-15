import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { ResponseDef } from "@sharedType/api/responseType";
import { PostDeletePostingDef, useDeletePostingProps, RequestObjDef } from "./type";

const postDeletePosting: PostDeletePostingDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.delete(`/postings/${requestObj?.id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  return data;
};

export const useDeletePosting: useDeletePostingProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postDeletePosting);
  return mutationResult;
};
