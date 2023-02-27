export interface RequestObjDef {
  userId: number;
  id: number;
}

export interface ResponseObjDef {
  data: {
    insertId: number;
    userId: number;
    Id: number;
  };
}

export interface AddCompanyBookamrkArrDef {
  ({ userId, id }: RequestObjDef): Promise<ResponseObjDef>;
}
