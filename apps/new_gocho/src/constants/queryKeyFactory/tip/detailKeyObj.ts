export interface TipRequestObjDef {
  id: number;
}

export const tipDetailKeyObj = {
  all: [{ data: "tipDetail" }] as const,
  detail: (requestObj: TipRequestObjDef) => [{ data: "tipDetail", requestObj }] as const,
};
