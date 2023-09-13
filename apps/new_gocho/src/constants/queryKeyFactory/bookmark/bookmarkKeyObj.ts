export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
  order?: "name" | "popular" | "pay" | "recent";
  page?: number;
  size?: number;
}

export const userBookmarkKeyObj = {
  jdAll: [{ data: "userJobBookmarkArr" }] as const,
  companyAll: [{ data: "userCompanyBookmarkArr" }] as const,
  jobBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => [{ data: "userJobBookmarkArr", requestObj }] as const,
  companyBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => [{ data: "userCompanyBookmarkArr", requestObj }] as const,
};
