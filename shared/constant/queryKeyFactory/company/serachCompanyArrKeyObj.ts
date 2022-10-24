export interface SearchCompanyArrRequestDef {
  offset: string | string[] | undefined;
  searchWord: string | string[] | undefined;
}

export const searchCompanyArrKeyObj = {
  all: [{ data: "searchComapnyArr" }] as const,
  searchArr: (requestObj: SearchCompanyArrRequestDef) => {
    return [{ data: "searchComapnyArr", requestObj }] as const;
  },
};
