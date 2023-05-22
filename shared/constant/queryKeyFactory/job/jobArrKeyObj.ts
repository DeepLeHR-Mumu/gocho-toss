export interface JobArrRequestObjDef {
  order: "recent" | "popular" | "rand" | "view" | "end" | "com" | undefined;
  page?: number;
  size?: number;
  contractType?: string;
  industry?: string;
  place?: string;
  possibleEdu?: string;
  requiredExp?: string;
  rotation?: string;
  task?: string;
  searchWord?: string | null;
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
  companyId?: number;
}

export const jobArrKeyObj = {
  all: [{ data: "jobArr" }] as const,
  jobArr: (requestObj: JobArrRequestObjDef) => {
    return [{ data: "jobArr", requestObj }] as const;
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
