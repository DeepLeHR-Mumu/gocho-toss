export interface UserCompanyBookmarkArrRequestDef {
  userId: number | undefined;
}

export const userCompanyBookmarkArrKeyObj = {
  all: [{ data: "userCompanyBookmarkArr" }] as const,
  bookmarkArr: (requestObj: UserCompanyBookmarkArrRequestDef) => {
    return [{ data: "userCompanyBookmarkArr", requestObj }] as const;
  },
};
