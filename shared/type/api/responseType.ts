export interface ResponseDef {
  status: 200 | 201 | 202 | 400 | 403 | 404 | 408 | 409 | 500;
}

export interface AdminResponseDef {
  status: number;
  statusName: string;
}
