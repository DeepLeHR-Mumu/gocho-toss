export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter?: "valid" | "expired" | "todayUpload" | "almostDeadline" | "deadline";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  all: [{ data: "userJdBookmarkArr" }] as const,
  jdBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userJdBookmarkArr", requestObj }] as const;
  },
  infinite: (requestObj: UserBookmarkArrRequestDef) => {
    return [
      {
        data: "userJdBookmarkArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
