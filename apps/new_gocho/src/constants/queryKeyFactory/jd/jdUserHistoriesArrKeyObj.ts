export interface UserHistoriesJdArrRequestDef {
  userId: number | undefined;
  page?: number;
  size?: number;
}

export const userJdHistoriesKeyObj = {
  all: [{ data: "userJdHistoriesArr" }] as const,
  jdHistoriesArr: (requestObj: UserHistoriesJdArrRequestDef) => {
    return [{ data: "userJdHistoriesArr", requestObj }] as const;
  },
  infinite: (requestObj: UserHistoriesJdArrRequestDef) => {
    return [
      {
        data: "userJdHistoriesArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
