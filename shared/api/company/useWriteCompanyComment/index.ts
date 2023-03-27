import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostWriteCompanyCommentDef, RequestObjDef, useWriteCompanyCommentProps } from "./type";

const postWriteCompanyComment: PostWriteCompanyCommentDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(
    `/companies/${requestObj.companyId}/comments`,
    {
      description: `${requestObj.description}`,
      jd_id: `${requestObj.jdId}`,
    },
    { headers }
  );

  return data;
};

export const useWriteCompanyComment: useWriteCompanyCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postWriteCompanyComment });
};
