export interface UserJobBookmarkArrRequestDef {
  userId: number | undefined;
}

export const userJobBookmarkArrKeyObj = {
  all: [{ data: "userJobBookmarkArr" }] as const,
  bookmarkArr: (requestObj: UserJobBookmarkArrRequestDef) => {
    return [{ data: "userJobBookmarkArr", requestObj }] as const;
  },
};
