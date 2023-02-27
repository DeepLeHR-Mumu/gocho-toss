export interface RequestObjDef {
  userId: number;
  id: number;
}

export interface ResponseObjDef {
  data: {
    insertId: number;
    userId: number;
    id: number;
  };
}

export interface AddCompanyBookmarkArrDef {
  ({ userId, id }: RequestObjDef): Promise<ResponseObjDef>;
}
