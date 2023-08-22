export interface CompanyDetailRequestDef {
  companyId: number;
  isStatic: boolean;
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: CompanyDetailRequestDef) => {
    return [{ data: "companyDetail", requestObj }] as const;
  },
};
