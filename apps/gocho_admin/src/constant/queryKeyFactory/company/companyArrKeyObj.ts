export interface CompanyArrRequestDef {
  q?: string;
  page?: number;
  size?: number;
  order?: "recent" | "comment" | "name" | "popular" | "rand" | "view" | "rank";
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestDef) => [{ data: "companyArr", requestObj }] as const,
};
