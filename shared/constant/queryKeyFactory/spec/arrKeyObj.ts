export interface SpecArrInfinityRequestDef {
  order?: "recent" | "eval" | "age" | "-age" | "-score";
  limit?: number;
  offset?: number;
}

export const specArrKeyObj = {
  all: [{ data: "specArr" }] as const,
  list: (requestObj: SpecArrInfinityRequestDef) => {
    return [{ data: "specArr", requestObj }] as const;
  },
  infinite: (requestObj: SpecArrInfinityRequestDef) => {
    return [
      {
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
