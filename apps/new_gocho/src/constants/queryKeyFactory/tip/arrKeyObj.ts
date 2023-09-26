export interface TipArrRequestObjDef {
  order?: "recent" | "popular" | "rand" | "view";
  page?: number;
  size?: number;
  // limit?: number;
  // offset?: number;
  q?: string;
  company?: number;
}

export const tipArrKeyObj = {
  all: [{ data: "tipArr" }] as const,
  tipArr: (requestObj: TipArrRequestObjDef) => [{ data: "tipArr", requestObj }] as const,
  infinite: (requestObj: TipArrRequestObjDef) => [
      {
        data: "tipArr",
        usage: "infinite",
        requestObj,
      },
    ] as const,
};
