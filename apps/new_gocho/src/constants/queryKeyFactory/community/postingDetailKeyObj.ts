export interface CommunityPostingDetailRequestDef {
  id: number | undefined;
}

export const communityPostingDetailKeyObj = {
  all: [{ data: "communityPostingDetail" }] as const,
  postingDetail: (requestObj: CommunityPostingDetailRequestDef) => {
    return [{ data: "communityPostingDetail", requestObj }] as const;
  },
};
