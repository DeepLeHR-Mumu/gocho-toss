export interface JobDetailRequestObjDef {
  id: number | null;
  isStatic: boolean;
}

export const jobDetailKeyObj = {
  all: [{ data: "jobDetail" }] as const,
  detail: (requestObj: JobDetailRequestObjDef) => {
    return [{ data: "jobDetail", requestObj }] as const;
  },
};
