export interface JobArrRequestObjDef {
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  limit?: number;
  offset?: number;
  q?: string;
  userId?: string;
  filter?: "todayUpload" | "almostDeadline" | " deadline" | "expired" | "valid";
  parsing?: "full" | "raw";
  companyId?: number;
}

export const jobArrKeyObj = {
  all: [{ data: "jobArr" }] as const,
  jobArr: (requestObj: JobArrRequestObjDef) => {
    return ["jobArr", { requestObj }] as const;
  },
  infinite: (requestObj: JobArrRequestObjDef) => {
    return [
      {
        data: "jobArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
