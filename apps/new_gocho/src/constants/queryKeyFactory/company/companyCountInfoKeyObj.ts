export interface CompanyCountInfoRequestObjDef {
  id: number;
}

export const companyCountInfoKeyObj = {
  all: [{ data: "companyCountInfo" }] as const,
  countInfo: (requestObj: CompanyCountInfoRequestObjDef) => [{ data: "companyCountInfo", requestObj }] as const,
};
