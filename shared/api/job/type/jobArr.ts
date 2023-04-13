import { CompanyObjDef } from "../../company/type/company";

export interface JobObjDef {
  id: number;
  company: CompanyObjDef;
  created_time: number;
  start_time: number;
  end_time: number;
  title: string;
  high: boolean;
  college: boolean;
  position_count: number;
  place_arr: string[];
  rotation_arr: string[];
  task_arr: string[];
  process_arr: string[];
  apply_desc_arr: string[];
  etc_arr: string[];
  apply_url: string;
  cut: boolean;
  bookmark: number;
  view: number;
}
