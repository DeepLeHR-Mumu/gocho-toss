export interface JobArrRequestObjDef {
  order?: "recent" | "popular" | "rand" | "view" | "end" | "com";
  limit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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
    return [{ data: "jobArr", requestObj }] as const;
  },
};
