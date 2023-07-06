import { AxiosResponse } from "axios";

export interface RequestObjDef {
  phone_number: string;
}

export interface PostSendAuthNumberDef {
  ({ phone_number }: RequestObjDef): Promise<AxiosResponse>;
}
