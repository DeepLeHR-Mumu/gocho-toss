import { useQuery } from "@tanstack/react-query";

import {
  companyCommentArrKeyObj,
  CompanyCommentArrRequestDef,
} from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { GetCompanyCommentDef } from "./type";
import { selector } from "./util";

export const getCompanyComment: GetCompanyCommentDef = async ({
  queryKey: [
    {
      requestObj: { companyId },
    },
  ],
}) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.get(`/companies/${companyId}/comments`, { headers });
  return data;
};

export const useCompanyCommentArr = (requestObj: CompanyCommentArrRequestDef) => {
  return useQuery({
    queryKey: companyCommentArrKeyObj.commentArr(requestObj),
    queryFn: getCompanyComment,
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return selector(data);
    },
  });
};
