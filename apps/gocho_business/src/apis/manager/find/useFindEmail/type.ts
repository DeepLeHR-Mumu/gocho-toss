import { AxiosResponse } from "axios";

export interface RequestObjDef {
  name: string;
  phone_number: string;
}

export interface PostFindEmailDef {
  ({ name, phone_number }: RequestObjDef): Promise<AxiosResponse>;
}
