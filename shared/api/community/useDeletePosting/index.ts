import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
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
