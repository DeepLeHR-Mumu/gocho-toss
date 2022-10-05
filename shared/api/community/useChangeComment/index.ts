import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PutChangeCommentDef, useChangeCommentProps, RequestObjDef } from "./type";

const putChangeComment: PutChangeCommentDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.put(
    `/postings/${requestObj.postingId}/comments/${requestObj.commentId}`,
    {
      description: `${requestObj.description}`,
    },
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

export const useChangeComment: useChangeCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(putChangeComment);
  return mutationResult;
};
