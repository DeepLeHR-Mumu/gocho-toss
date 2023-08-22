export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  filter?: "valid" | "expired" | "todayUpload" | "almostDeadline" | "deadline";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  jobAll: [{ data: "userJobBookmarkArr" }] as const,
  companyAll: [{ data: "userCompanyBookmarkArr" }] as const,
  jobBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userJobBookmarkArr", requestObj }] as const;
  },
  companyBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userCompanyBookmarkArr", requestObj }] as const;
  },
};
