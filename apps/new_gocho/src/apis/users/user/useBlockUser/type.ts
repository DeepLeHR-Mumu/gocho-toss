import { AxiosResponse } from "axios";

export interface RequestObjDef {
  userId: number;
}

export interface BlockUserDef {
  ({ userId }: RequestObjDef): Promise<AxiosResponse>;
}
