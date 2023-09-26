export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter?: "valid" | "expired" | "todayUpload" | "almostDeadline" | "deadline";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  all: [{ data: "userCompanyBookmarkArr" }] as const,
  companyBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => [{ data: "userCompanyBookmarkArr", requestObj }] as const,
  infinite: (requestObj: UserBookmarkArrRequestDef) => [
      {
        data: "userCompanyBookmarkArr",
        usage: "infinite",
        requestObj,
      },
    ] as const,
};
