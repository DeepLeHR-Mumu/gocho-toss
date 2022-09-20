import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import {
  communityCommentArrKeyObj,
  CommunityCommentArrReqObj,
} from "shared-constant/queryKeyFactory/community/commentArrKeyObj";

import { GetPostingCommentArrDef } from "./type";
import { selector } from "./util";

export const getPostingCommentArr: GetPostingCommentArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/postings/${requestObj?.postingId}/comments`);
  return data;
};

export const usePostingCommentArr = (requestObj: CommunityCommentArrReqObj) => {
  const queryResult = useQuery(communityCommentArrKeyObj.commentArr(requestObj), getPostingCommentArr, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
