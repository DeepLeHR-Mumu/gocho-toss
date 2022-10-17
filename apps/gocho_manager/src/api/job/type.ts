export interface JobObjDef {
  id: number;
  company: { id: number; name: string };
  title: string;
  cut: boolean;
  start_time: number;
  end_time: number;
  apply_url: string;
  task_arr: string[];
  edu_summary: string[];
  place_arr: string[];
  rotation_arr: string[];
  contract_type: string[];
}
