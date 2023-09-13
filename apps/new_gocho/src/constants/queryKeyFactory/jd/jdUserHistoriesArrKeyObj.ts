export interface UserHistoryJdArrRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userJdHistoriesKeyObj = {
  all: [{ data: "userJdHistoryArr" }] as const,
  jdHistoriesArr: (requestObj: UserHistoryJdArrRequestDef) => [{ data: "userJdHistoryArr", requestObj }] as const,
  infinite: (requestObj: UserHistoryJdArrRequestDef) => [
      {
        data: "userJdHistoryArr",
        usage: "infinite",
        requestObj,
      },
    ] as const,
};
