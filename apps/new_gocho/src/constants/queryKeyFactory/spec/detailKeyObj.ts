export interface SpecDetailRequestDef {
  specId: number;
}

export const specDetailKeyObj = {
  all: [{ data: "specDetail" }] as const,
  detail: (requestObj: SpecDetailRequestDef) => [{ data: "specDetail", requestObj }] as const,
};
