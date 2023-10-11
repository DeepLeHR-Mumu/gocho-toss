export interface ResponseObjDef {
  data: string[];
}

export interface GetCertificationListDef {
  (q: string): Promise<ResponseObjDef>;
}
