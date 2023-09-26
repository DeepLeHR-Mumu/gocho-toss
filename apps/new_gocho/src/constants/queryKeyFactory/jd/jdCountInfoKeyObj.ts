export interface JdCountInfoRequestObjDef {
  id: number | null;
}

export const jdCountInfoKeyObj = {
  all: [{ data: "jdCountInfo" }] as const,
  countInfo: (requestObj: JdCountInfoRequestObjDef) => [{ data: "jdCountInfo", requestObj }] as const,
};
