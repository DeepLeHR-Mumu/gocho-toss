import { CompanyObjDef } from "@api/company/type/company";

export interface JobBookmarkObjDef {
  id: number;
  company: CompanyObjDef;
  created_time: number;
  end_time: number;
  title: string;
}
