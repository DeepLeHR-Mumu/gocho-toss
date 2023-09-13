export interface CompanyArrRequestDef {
  q?: string;
  page?: number;
  size?: number;
  order?: "recent" | "comment" | "name" | "popular" | "rand" | "view" | "rank";
  // TODO: 타입 구체화 필요성 논의
  industry?: string;
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestDef) => [{ data: "companyArr", requestObj }] as const,
};
