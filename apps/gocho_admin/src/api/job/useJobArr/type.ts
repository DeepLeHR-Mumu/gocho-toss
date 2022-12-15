import { QueryFunctionContext } from "@tanstack/react-query";

import { jobArrKeyObj } from "../keyFactory";

export interface JobObjDef {
  id: number;
  company: { id: number; name: string; logo_url: string };
  status: string;
  title: string;
  cut: boolean;
  view: number;
  start_time: number;
  end_time: number;
  apply_url: string;
  task_arr: string[];
  edu_summary: string[];
  place_arr: string[];
  rotation_arr: string[];
  contract_type: string[];
  required_exp_arr: string[];
}

export interface ResponseObjDef {
  data: JobObjDef[];
  count: number;
}

export interface GetJobArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jobArrKeyObj.jobArr>>): Promise<ResponseObjDef>;
}
