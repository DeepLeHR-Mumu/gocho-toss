export interface JobDetailRequestObjDef {
  id: number;
}

export const jobDetailKeyObj = {
  all: [{ data: "jobDetail" }] as const,
  detail: (requestObj: JobDetailRequestObjDef) => {
    return [{ data: "jobDetail", requestObj }] as const;
  },
};
