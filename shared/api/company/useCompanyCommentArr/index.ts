import { useQuery } from "@tanstack/react-query";

import {
  CompanyCommentArrRequestDef,
  companyCommentArrKeyObj,
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
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.get(`/companies/${companyId}/comments`, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useCompanyCommentArr = (requestObj: CompanyCommentArrRequestDef) => {
  const queryResult = useQuery(companyCommentArrKeyObj.commentArr(requestObj), getCompanyComment, {
    enabled: Boolean(requestObj.companyId),
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
