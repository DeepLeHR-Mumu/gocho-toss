export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter?: "valid" | "expired" | "todayUpload" | "almostDeadline" | "deadline";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  all: [{ data: "userJobBookmarkArr" }] as const,
  jobBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userJobBookmarkArr", requestObj }] as const;
  },
  infinite: (requestObj: UserBookmarkArrRequestDef) => {
    return [
      {
        data: "userJobBookmarkArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
