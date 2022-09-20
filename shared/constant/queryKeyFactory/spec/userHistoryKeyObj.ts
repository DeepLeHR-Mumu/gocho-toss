export interface mySpecHistoryRequestObjDef {
  id: number | undefined;
}

export const mySpecHistoryKeyObj = {
  all: [{ data: "specMyHistory" }] as const,
  list: (requestObj: mySpecHistoryRequestObjDef) => {
    return [{ data: "specMyHistory", requestObj }] as const;
  },
};
