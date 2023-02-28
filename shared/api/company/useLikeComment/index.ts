import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostLikeCommentDef, UseLikeCommentProps, RequestObjDef } from "./type";

const postLikeComment: PostLikeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/likes`,
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

export const useLikeComment: UseLikeCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postLikeComment });
  return mutationResult;
};
