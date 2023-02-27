import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostWriteCompanyCommentDef, useWriteCompanyCommentProps, RequestObjDef } from "./type";

const postWriteCompanyComment: PostWriteCompanyCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments`,
    {
      description: `${requestObj.description}`,
      jd_id: `${requestObj.jdId}`,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return data;
};

export const useWriteCompanyComment: useWriteCompanyCommentProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postWriteCompanyComment);
  return mutationResult;
};
