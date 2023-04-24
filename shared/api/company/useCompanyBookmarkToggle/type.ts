import { AxiosResponse } from "axios";

export interface RequestObjDef {
  companyId: number;
}

export interface PostCompanyBookmarkDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
