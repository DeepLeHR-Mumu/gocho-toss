import { AxiosResponse } from "axios";

export interface RequestObjDef {
  email: string;
}

export interface PostFindPasswordDef {
  ({ email }: RequestObjDef): Promise<AxiosResponse>;
}
