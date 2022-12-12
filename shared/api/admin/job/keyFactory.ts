export interface JobArrRequestObjDef {
  order: "recent" | "popular" | "rand" | "view" | "end" | "com" | undefined;
  limit?: number;
  offset?: number;
  q?: string;
  userId?: string;
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
  status?: "all" | "upload-waiting" | "modify-waiting" | "upload-reject" | "modify-reject";
  parsing?: "full" | "raw";
  companyId?: number;
}

export interface JobDetailRequestObjDef {
  id: number | null;
}

export interface SearchJobRequestObjDef {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
  limit: number;
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

export const jobDetailKeyObj = {
  all: [{ data: "jobDetail" }] as const,
  detail: (requestObj: JobDetailRequestObjDef) => {
    return [{ data: "jobDetail", requestObj }] as const;
  },
};

export const searchJobArrKeyObj = {
  all: [{ data: "searchJobArr" }] as const,
  searchArr: (requestObj: SearchJobRequestObjDef) => {
    return [{ data: "searchJobArr", requestObj }] as const;
  },
};
