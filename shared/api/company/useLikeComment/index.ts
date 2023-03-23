import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostLikeCommentDef, RequestObjDef, UseLikeCommentProps } from "./type";

const postLikeComment: PostLikeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/likes`,
    {
      commentId: `${requestObj.commentId}`,
      companyId: `${requestObj.companyId}`,
    },
    { headers }
  );

  return data;
};

export const useLikeComment: UseLikeCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postLikeComment });
};
