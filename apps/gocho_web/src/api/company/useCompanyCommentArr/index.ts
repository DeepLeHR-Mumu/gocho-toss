import { useQuery } from "@tanstack/react-query";

import {
  CompanyCommentArrRequestDef,
  companyCommentArrKeyObj,
} from "@constant/queryKeyFactory/company/commentArrKeyObj";
import { axiosInstance } from "@api/axiosInstance";

import { GetCompanyCommentDef } from "./type";
import { selector } from "./util";

export const getCompanyComment: GetCompanyCommentDef = async ({
  queryKey: [
    {
      requestObj: { companyId },
    },
  ],
}) => {
  const { data } = await axiosInstance.get(`/companies/${companyId}/comments`);
  return data;
};

export const useCompanyCommentArr = (
  requestObj: CompanyCommentArrRequestDef
) => {
  const queryResult = useQuery(
    companyCommentArrKeyObj.commentArr(requestObj),
    getCompanyComment,
    {
      enabled: Boolean(requestObj.companyId),
      select: ({ data }) => {
        return selector(data);
      },
    }
  );
  return queryResult;
};
