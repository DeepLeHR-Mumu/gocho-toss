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

export interface ResponseObjDef {
  data: {
    id: number;
    company: { id: number; name: string; logo_url: string };
    status: {
      name: string;
      reason: string | null;
    };
    title: string;
    cut: boolean;
    view: number;
    start_time: string;
    end_time: string;
    apply_url: string;
    task_arr: string[];
    edu_summary: string[];
    place_arr: string[];
    rotation_arr: string[];
    contract_type: string[];
    required_exp_arr: string[];
  }[];
  count: number;
}

export const jdArrKeyObj = {
  all: [{ data: "jdArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "jdArr", requestObj }] as const,
};

export interface GetJdArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof jdArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
