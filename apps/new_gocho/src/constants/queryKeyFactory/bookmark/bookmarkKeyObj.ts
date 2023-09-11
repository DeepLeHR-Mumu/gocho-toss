export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "name" | "popular" | "pay" | "recent";
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
