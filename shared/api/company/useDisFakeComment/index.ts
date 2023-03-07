import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDisFakeCommentDef, UseDisFakeCommentProps, RequestObjDef } from "./type";

const postDisFakeComment: PostDisFakeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/dislikes`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return data;
};

export const useDisFakeComment: UseDisFakeCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDisFakeComment });
  return mutationResult;
};
