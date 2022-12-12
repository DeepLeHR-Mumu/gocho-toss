export interface CompanyArrRequestObjDef {
  q?: string;
  limit?: number;
  offset?: number;
  order: "recent" | "comment" | "name" | "popular" | "rand" | "view" | undefined;
  word?: string;
}

export interface CompanyCommentArrRequestObjDef {
  companyId: number;
}

export interface CompanyDetailRequestObjDef {
  companyId: number;
}

export interface SearchCompanyArrRequestObjDef {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
  limit: number;
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestObjDef) => {
    return [{ data: "companyArr", requestObj }] as const;
  },
};

export const companyCommentArrKeyObj = {
  all: [{ data: "companyCommentArr" }] as const,
  commentArr: (requestObj: CompanyCommentArrRequestObjDef) => {
    return [{ data: "companyCommentArr", requestObj }] as const;
  },
};

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: CompanyDetailRequestObjDef) => {
    return [{ data: "companyDetail", requestObj }] as const;
  },
};

export const searchCompanyArrKeyObj = {
  all: [{ data: "searchCompanyArr" }] as const,
  searchArr: (requestObj: SearchCompanyArrRequestObjDef) => {
    return [{ data: "searchCompanyArr", requestObj }] as const;
  },
};
