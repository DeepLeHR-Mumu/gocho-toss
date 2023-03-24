import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDisLikeCommentDef, RequestObjDef, UseDisLikeCommentProps } from "./type";

const postDisLikeComment: PostDisLikeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.delete(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/likes`,
    { headers }
  );

  return data;
};

export const useDisLikeComment: UseDisLikeCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDisLikeComment });
};
