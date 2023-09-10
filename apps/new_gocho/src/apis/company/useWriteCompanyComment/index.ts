import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostWriteCompanyCommentDef, RequestObjDef, useWriteCompanyCommentProps } from "./type";

const postWriteCompanyComment: PostWriteCompanyCommentDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/companies/${requestObj.companyId}/comments`, {
    jd_id: requestObj.jdId,
    description: `${requestObj.description}`,
  });

  return data;
};

export const useWriteCompanyComment: useWriteCompanyCommentProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postWriteCompanyComment });
};
