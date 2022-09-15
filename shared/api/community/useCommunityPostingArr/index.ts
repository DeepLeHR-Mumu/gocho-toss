import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";
import {
  communityPostingArrKeyObj,
  CommunityPostingArrRequestDef,
} from "@sharedConstant/queryKeyFactory/community/postingArrKeyObj";

import { GetPostingArrDef } from "./type";
import { selector } from "./util";

export const getCommunityPostingArr: GetPostingArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get(`/postings`, {
    params: requestObj,
  });
  return data;
};

export const useCommunityPostingArr = (requestObj: CommunityPostingArrRequestDef) => {
  const queryResult = useQuery(communityPostingArrKeyObj.postingArr(requestObj), getCommunityPostingArr, {
    select: ({ data }) => {
      return selector(data);
    },
  });
  return queryResult;
};
