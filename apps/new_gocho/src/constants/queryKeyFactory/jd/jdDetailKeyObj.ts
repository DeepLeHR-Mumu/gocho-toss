export interface JdDetailRequestObjDef {
  id: number | null;
  isStatic: boolean;
}

export const jdDetailKeyObj = {
  all: [{ data: "jdDetail" }] as const,
  detail: (requestObj: JdDetailRequestObjDef) => {
    return [{ data: "jdDetail", requestObj }] as const;
  },
};
