export interface JobObjDef {
  id: number;
  company: {
    id: number;
    name: string;
    logo_url: string;
  };
  title: string;
  cut: boolean;
  start_time: string;
  end_time: string;
  created_time: string;
  updated_time: string | null;
  apply_url: string;
  bookmark: number;
  is_bookmark: boolean;
  view: number;
  click: number;
  position_count: number;
  high: boolean;
  college: boolean;
  required_exp_arr: string[];
  place_arr: string[];
  rotation_arr: string[];
  contract_type: string[];
  task_arr: string[];
}

export interface PageResultDef {
  total_elements: number;
  total_pages: number;
  page: number;
  size: number;
  is_first: boolean;
  is_last: boolean;
}
