import { QueryFunctionContext } from "@tanstack/react-query";

export type AuthName = "미인증" | "인증완료" | "인증대기" | "인증반려";

export type AuthStatus = {
  name: AuthName;
  reason: string[];
  authenticated_time: string | null;
  is_first: boolean;
};

export interface ResponseObjDef {
  data: {
    id: number;
    email: string;
    name: string;
    department: string;
    company: {
      id: number;
      name: string;
      logo_url: string;
      industry: string[];
      view: number;
      progress_jd_count: number;
      waiting_jd_count: number;
    };
    status: AuthStatus;
  };
}

export const managerProfileKeyObj = {
  all: [{ data: "managerProfile" }] as const,
};

export interface GetManagerProfileDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
