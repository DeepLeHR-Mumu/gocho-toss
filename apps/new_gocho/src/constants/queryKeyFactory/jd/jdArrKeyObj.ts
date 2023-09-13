export interface JdArrRequestObjDef {
  enable?: boolean;
  order: "recent" | "popular" | "rand" | "view" | "end" | "com";
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

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  jdArr: (requestObj: JdArrRequestObjDef) => {
    return [{ data: "jdArr", requestObj }] as const;
  },
  infinite: (requestObj: JdArrRequestObjDef) => {
    return [
      {
        data: "jdArr",
        usage: "infinite",
        requestObj,
      },
    ] as const;
  },
};
