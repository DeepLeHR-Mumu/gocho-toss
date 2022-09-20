type FilterDef = "free" | "com" | "career" | "certi" | undefined;
type HashtagDef = "recent" | "popular" | "view" | "rand";

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
