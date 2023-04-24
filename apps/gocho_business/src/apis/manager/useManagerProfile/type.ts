import { QueryFunctionContext } from "@tanstack/react-query";

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
      industry: string;
    };
  };
}

export const managerProfileKeyObj = {
  all: [{ data: "managerProfile" }] as const,
};

export interface GetManagerProfileDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
