export interface CompanyCommentArrRequestDef {
  companyId: number;
}

export const companyCommentArrKeyObj = {
  all: [{ data: "companyCommentArr" }] as const,
  commentArr: (requestObj: CompanyCommentArrRequestDef) => {
    return [{ data: "companyCommentArr", requestObj }] as const;
  },
};
