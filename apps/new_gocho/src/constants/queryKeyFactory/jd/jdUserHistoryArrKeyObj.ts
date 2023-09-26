export interface UserHistoryJdArrRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userJdHistoryKeyObj = {
  all: [{ data: "userJdHistoryArr" }] as const,
  jdHistoryArr: (requestObj: UserHistoryJdArrRequestDef) => [{ data: "userJdHistoryArr", requestObj }] as const,
  infinite: (requestObj: UserHistoryJdArrRequestDef) =>
    [
      {
        data: "userJdHistoryArr",
        usage: "infinite",
        requestObj,
      },
    ] as const,
};
