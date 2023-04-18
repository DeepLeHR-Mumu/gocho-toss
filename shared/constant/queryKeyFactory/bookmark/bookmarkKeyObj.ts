export interface UserBookmarkArrRequestDef {
  userId: number | undefined;
}

export interface OldUserBookmarkRequestDef {
  userId: number | undefined;
  likeType: "jd-bookmark" | "company-bookmarks" | "posting-likes" | "tip-likes";
  elemId: number;
}

export const oldBookmarkKeyObj = {
  all: [{ data: "userBookmarkArr" }] as const,
  bookmark: (requestObj: OldUserBookmarkRequestDef) => {
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

export const userBookmarkKeyObj = {
  jobAll: [{ data: "userJobBookmarkArr" }] as const,
  companyAll: [{ data: "userCompanyBookmarkArr" }] as const,
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
