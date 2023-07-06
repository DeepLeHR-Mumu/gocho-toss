import { AxiosResponse } from "axios";

export interface RequestObjDef {
  phone_number: string;
  auth_number: string;
}

export interface PostCheckAuthNumberDef {
  ({ phone_number, auth_number }: RequestObjDef): Promise<AxiosResponse>;
}
