export interface FilterRequestObjDef {
  userId: number | undefined;
}

export const filterKeyObj = {
  all: (requestObj: FilterRequestObjDef) => [{ data: "userFilter", requestObj }] as const,
};
