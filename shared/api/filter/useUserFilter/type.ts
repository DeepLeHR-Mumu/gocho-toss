import { QueryFunctionContext } from "@tanstack/react-query";
import { filterKeyObj } from "shared-constant/queryKeyFactory/filter/filterKeyObj";

export interface ResponseObjDef {
  data: {
    possible_edu: string[];
    place: string[];
    required_exp: string[];
    contract_type: string[];
    rotation: string[];
    industry: string[];
    task: string[];
  };
}

export interface GetUserFilterDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof filterKeyObj.all>>): Promise<ResponseObjDef>;
}
