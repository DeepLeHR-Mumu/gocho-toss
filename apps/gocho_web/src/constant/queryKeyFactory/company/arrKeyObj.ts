export interface CompanyArrRequestDef {
  order: "comment";
}

export const companyArrKeyObj = {
  all: [{ data: "companyArr" }] as const,
  companyArr: (requestObj: CompanyArrRequestDef) => {
    return [{ data: "companyArr", requestObj }] as const;
  },
};
