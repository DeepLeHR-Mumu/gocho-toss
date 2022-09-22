export interface CompanyDetailKeyObjDef {
  companyId: number;
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: CompanyDetailKeyObjDef) => {
    return [{ data: "companyDetail", requestObj }] as const;
  },
};
