export interface SearchCompanyArrRequestDef {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
  limit: number;
}

export const searchCompanyArrKeyObj = {
  all: [{ data: "searchCompanyArr" }] as const,
  searchArr: (requestObj: SearchCompanyArrRequestDef) => [{ data: "searchCompanyArr", requestObj }] as const,
};
