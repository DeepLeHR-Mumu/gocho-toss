export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "recent" | "popular" | "view" | "upload" | "end";
  filter?: "valid" | "expired" | "todayUpload" | "almostDeadline" | "deadline";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  all: [{ data: "userJdBookmarkArr" }] as const,
  jdBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => [{ data: "userJdBookmarkArr", requestObj }] as const,
  infinite: (requestObj: UserBookmarkArrRequestDef) => [
      {
        data: "userJdBookmarkArr",
        usage: "infinite",
        requestObj,
      },
    ] as const,
};
