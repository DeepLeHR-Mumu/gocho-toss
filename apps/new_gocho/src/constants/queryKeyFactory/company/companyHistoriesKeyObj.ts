export interface UserCompanyHistoriesRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userCompanyHistoriesArrKeyObj = {
  all: [{ data: "companyHistories" }] as const,
  companyHistoriesArr: (requestObj: UserCompanyHistoriesRequestDef) => {
    return [{ data: "companyHistories", requestObj }] as const;
  },
};
