export interface CompanyArrRequestDef {
  q?: string;
  page?: number;
  size?: number;
  order?: "recent" | "comment" | "name" | "popular" | "pay" | "rand" | "view" | "rank";
  industry?: string;
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestDef) => [{ data: "companyArr", requestObj }] as const,
};
