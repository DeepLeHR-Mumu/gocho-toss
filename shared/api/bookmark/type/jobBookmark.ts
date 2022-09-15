import { CompanyObjDef } from "../../company/type/company";

export interface JobBookmarkObjDef {
  id: number;
  company: CompanyObjDef;
  created_time: number;
  end_time: number;
  title: string;
}
