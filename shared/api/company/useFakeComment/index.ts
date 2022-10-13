import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostFakeCommentDef, UseFakeCommentProps, RequestObjDef } from "./type";

const postFakeComment: PostFakeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/dislikes`,
    {
      commentId: `${requestObj.commentId}`,
      companyId: `${requestObj.companyId}`,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return data;
};

export const useFakeComment: UseFakeCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postFakeComment);
  return mutationResult;
};
