export interface CompanyDetailRequestDef {
  companyId: number;
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: CompanyDetailRequestDef) => {
    return [{ data: "companyDetail", requestObj }] as const;
  },
};
