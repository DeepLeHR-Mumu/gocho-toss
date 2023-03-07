import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDisLikeCommentDef, UseDisLikeCommentProps, RequestObjDef } from "./type";

const postDisLikeComment: PostDisLikeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/likes`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return data;
};

export const useDisLikeComment: UseDisLikeCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDisLikeComment });
  return mutationResult;
};
