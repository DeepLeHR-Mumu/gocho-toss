import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDisFakeCommentDef, RequestObjDef, UseDisFakeCommentProps } from "./type";

const postDisFakeComment: PostDisFakeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.delete(
    `/companies/${requestObj.companyId}/comments/${requestObj.commentId}/dislikes`,
    { headers }
  );

  return data;
};

export const useDisFakeComment: UseDisFakeCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDisFakeComment });
};
