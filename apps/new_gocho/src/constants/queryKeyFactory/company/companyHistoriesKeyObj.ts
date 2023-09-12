export interface UserCompanyHistoryArrRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userCompanyHistoryArrKeyObj = {
  all: [{ data: "companyHistoryArr" }] as const,
  companyHistoryArr: (requestObj: UserCompanyHistoryArrRequestDef) => {
    return [{ data: "companyHistoryArr", requestObj }] as const;
  },
};
