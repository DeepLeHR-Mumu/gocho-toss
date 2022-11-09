import { useQuery } from "@tanstack/react-query";

import {
  communityPostingDetailKeyObj,
  CommunityPostingDetailRequestDef,
} from "shared-constant/queryKeyFactory/community/postingDetailKeyObj";
import { axiosInstance } from "../../axiosInstance";

import { GetPostingDetailDef } from "./type";
import { selector } from "./util";

export const getPostingDetail: GetPostingDetailDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/postings/${requestObj.id}`, {});

  return data;
};

export const usePostingDetail = (requestObj: CommunityPostingDetailRequestDef) => {
  const queryResult = useQuery(communityPostingDetailKeyObj.postingDetail(requestObj), getPostingDetail, {
    select: ({data}) => {
      return selector(data);
    },
    enabled: Boolean(requestObj.id),
  });
  return queryResult;
};
