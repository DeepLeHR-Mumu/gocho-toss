export interface CompanyArrRequestDef {
  q?: string;
  limit?: number;
  offset?: number;
  order?: "recent" | "comment" | "name" | "popular" | "rand" | "view";
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestDef) => {
    return [{ data: "companyArr", requestObj }] as const;
  },
};
