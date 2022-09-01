import { useInfiniteQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";
import {
  communityPostingArrKeyObj,
  CommunityPostingArrRequestDef,
} from "@constant/queryKeyFactory/community/postingArrKeyObj";

import { GetInfinitePostingArrDef } from "./type";
import { selector } from "./util";

export const getInfiniteCommunityPostingArr: GetInfinitePostingArrDef = async ({
  queryKey: [{ requestObj }],
  pageParam,
}) => {
  const { data } = await axiosInstance.get(`/postings`, {
    params: { ...requestObj, offset: pageParam },
  });

  const nextPage = pageParam === undefined ? 10 : pageParam + 10;

  return { ...data, nextPage };
};

export const useInfiniteCommunityPostingArr = (
  requestObj: CommunityPostingArrRequestDef
) => {
  const queryResult = useInfiniteQuery(
    communityPostingArrKeyObj.infinite(requestObj),
    getInfiniteCommunityPostingArr,
    {
      getNextPageParam: (responseObj) => {
        return responseObj.data.length !== 0 ? responseObj.nextPage : undefined;

      },
      select: (data) => {
        return {
          pages: data.pages.map((page) => {
            return selector(page);
          }),
          pageParams: [...data.pageParams],
        };
      },
    }
  );
  return queryResult;
};
