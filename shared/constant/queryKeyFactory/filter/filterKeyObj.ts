export interface FilterRequestObjDef {
  userId: number | undefined;
}

export const filterKeyObj = {
  all: (requestObj: FilterRequestObjDef) => {
    return [{ data: "userFilter", requestObj }] as const;
  },
};
