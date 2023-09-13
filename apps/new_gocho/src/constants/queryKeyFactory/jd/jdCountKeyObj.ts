export interface JdCountRequestObjDef {
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
  companyId?: number;
  contractType?: string;
  industry?: string;
  place?: string;
  possibleEdu?: string;
  requiredExp?: string;
  rotation?: string;
  task?: string;
  searchWord?: string | null;
}

export const jdCountKeyObj = {
  all: [{ data: "jdCount" }] as const,
  jdCount: (requestObj: JdCountRequestObjDef) => {
    return [{ data: "jdCount", requestObj }] as const;
  },
};
