export interface SearchCompanyArrRequestDef {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
}

export const searchCompanyArrKeyObj = {
  all: [{ data: "searchComapnyArr" }] as const,
  searchArr: (requestObj: SearchCompanyArrRequestDef) => {
    return [{ data: "searchCompanyArr", requestObj }] as const;
  },
};
