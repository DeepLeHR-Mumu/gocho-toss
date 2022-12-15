import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  order: "recent" | "popular" | "rand" | "view" | "end" | "com" | undefined;
  limit?: number;
  offset?: number;
  q?: string;
  userId?: string;
  filter?: "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
  status?: "all" | "upload-waiting" | "modify-waiting" | "upload-reject" | "modify-reject";
  parsing?: "full" | "raw";
  companyId?: number;
}

interface JdObjDef {
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
  data: JdObjDef[];
  count: number;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => {
    return [{ data: "jdArr", requestObj }] as const;
  },
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
