import { AxiosResponse } from "axios";

export interface RequestObjDef {
  company: {
    company_id: number;
    name: string;
    business_number: string;
  };
  email: string;
  password: string;
  department: string;
  position: string;
  token_version_id: string;
  manager_agreement: {
    terms: number;
    privacy: number;
  };
}

export interface PostManagersRegisterDef {
  (requsetObj: RequestObjDef): Promise<AxiosResponse>;
}
