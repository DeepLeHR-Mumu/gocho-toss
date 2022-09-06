export interface FilterRequestObjDef {
  userId: number;
}

export const filterKeyObj = {
  all: [{ data: "userFilter" }] as const,
  get: (requestObj: FilterRequestObjDef) => {
    return [{ data: "userFilter", method: "get", requestObj }] as const;
  },
  post: (requestObj: FilterRequestObjDef) => {
    return [{ data: "userFilter", method: "post", requestObj }] as const;
  },
};
