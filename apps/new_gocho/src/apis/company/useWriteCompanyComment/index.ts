import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { PostWriteCompanyCommentDef, RequestObjDef, useWriteCompanyCommentProps } from "./type";

const postWriteCompanyComment: PostWriteCompanyCommentDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/companies/${requestObj.companyId}/comments`, {
    jd_id: requestObj.jdId,
    description: `${requestObj.description}`,
  });

  return data;
};

export const useWriteCompanyComment: useWriteCompanyCommentProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postWriteCompanyComment });
