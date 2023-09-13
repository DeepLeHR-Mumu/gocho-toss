export interface CompanyCommentArrRequestDef {
  companyId: number;
  jdId?: number;
}

export const companyCommentArrKeyObj = {
  all: [{ data: "companyCommentArr" }] as const,
  commentArr: (requestObj: CompanyCommentArrRequestDef) => [{ data: "companyCommentArr", requestObj }] as const,
};
