export interface ResumeCareerDef {
  id: number;
  name: string;
  is_working: boolean;
  start_date: string;
  end_date: string;
  contract_type: string;
  department: string | null;
  position: string | null;
  job_description: string | null;
  pay: number | null;
  retire_description: string | null;
}

export interface PostCareerDef {
  name: string;
  is_working: boolean;
  start_date: string;
  end_date: string;
  contract_type: string;
  department: string | null;
  position: string | null;
  job_description: string | null;
  pay: number | null;
  retire_description: string | null;
}
