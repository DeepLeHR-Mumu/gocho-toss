import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";
import { ResponseDef } from "@type/api/responseType";
import {
  PostWriteCommentDef,
  useWriteCommentProps,
  RequestObjDef,
} from "./type";

const postWriteComment: PostWriteCommentDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/postings/${requestObj.postingId}/comments/`,
    {
      description: `${requestObj.description}`,
      parentCommentId:
        requestObj.parentCommentId && `${requestObj.parentCommentId}`,
    },
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const useWriteComment: useWriteCommentProps = () => {
  const mutationResult =
    useMutation<ResponseDef, AxiosError, RequestObjDef>(postWriteComment);
  return mutationResult;
};
