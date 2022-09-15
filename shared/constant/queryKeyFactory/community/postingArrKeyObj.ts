import { FilterDef, HashtagDef } from "@pages/community/postings/part/listPart/type";

export interface CommunityPostingArrRequestDef {
  order?: "recent" | "popular" | "rand" | "view";
  limit?: number;
  offset?: number;
  q?: string;
  hashTag?: HashtagDef;
  filter?: FilterDef;
}

export const communityPostingArrKeyObj = {
  all: [{ data: "communityPostingArr" }] as const,
  postingArr: (requestObj: CommunityPostingArrRequestDef) => {
    return [{ data: "communityPostingArr", requestObj }] as const;
  },
  infinite: (requestObj: CommunityPostingArrRequestDef) => {
    return [
      {
        data: "communityPostingArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
