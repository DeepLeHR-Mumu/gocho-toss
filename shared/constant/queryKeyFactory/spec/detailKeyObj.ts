export interface SpecDetailRequestDef {
  specId: number;
}

export const specDetailKeyObj = {
  all: [{ data: "specDetail" }] as const,
  detail: (requestObj: SpecDetailRequestDef) => {
    return [{ data: "specDetail", requestObj }] as const;
  },
};
