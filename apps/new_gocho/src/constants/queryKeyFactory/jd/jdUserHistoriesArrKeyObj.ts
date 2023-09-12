export interface UserHistoryJdArrRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userJdHistoriesKeyObj = {
  all: [{ data: "userJdHistoryArr" }] as const,
  jdHistoriesArr: (requestObj: UserHistoryJdArrRequestDef) => {
    return [{ data: "userJdHistoryArr", requestObj }] as const;
  },
  infinite: (requestObj: UserHistoryJdArrRequestDef) => {
    return [
      {
        data: "userJdHistoryArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
