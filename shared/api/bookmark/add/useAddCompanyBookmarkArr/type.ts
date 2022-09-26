export interface RequestObjDef {
    userId: number;
    elemId: number;
  }
  
  export interface ResponseObjDef {
    data: {
      insertId: number;
      userId: number;
      Id: number;
    };
  }
  
  export interface AddCompanyBookamrkArrDef {
    ({ userId, elemId }: RequestObjDef): Promise<ResponseObjDef>;
  }
  