export interface CompanyDetailRequestDef {
  companyId?: number;
  isStatic: boolean;
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: CompanyDetailRequestDef) => [{ data: "companyDetail", requestObj }] as const,
};
