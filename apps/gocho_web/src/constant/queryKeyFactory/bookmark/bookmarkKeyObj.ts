export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
}

export interface UserBookmarkRequestDef {
  userId: number | undefined;
  likeType: "jd-bookmark" | "company-bookmarks" | "posting-likes" | "tip-likes";
  elemId: number;
}

export const userBookmarkKeyObj = {
  all: [{ data: "userBookmarkArr" }] as const,
  bookmark: (requestObj: UserBookmarkRequestDef) => {
    return [{ data: "userBookmark", requestObj }] as const;
  },
  jobBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userJobBookmarkArr", requestObj }] as const;
  },
  companyBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userCompanyBookmarkArr", requestObj }] as const;
  },
  postingBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userPostingBookmarkArr", requestObj }] as const;
  },
  tipBookmarkArr: (requestObj: UserBookmarkArrRequestDef) => {
    return [{ data: "userTipBookmarkArr", requestObj }] as const;
  },
};
