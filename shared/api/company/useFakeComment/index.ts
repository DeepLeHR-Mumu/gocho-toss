import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostFakeCommentDef, RequestObjDef, UseFakeCommentProps } from "./type";

const postFakeComment: PostFakeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/dislikes`,
    {
      commentId: `${requestObj.commentId}`,
      companyId: `${requestObj.companyId}`,
    },
    { headers }
  );

  return data;
};

export const useFakeComment: UseFakeCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postFakeComment });
};
