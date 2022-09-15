import { QueryFunctionContext } from "@tanstack/react-query";
import { filterKeyObj } from "@sharedConstant/queryKeyFactory/filter/filterKeyObj";

export interface ResponseObjDef {
  data: {
    possibleEdu: string[];
    place: string[];
    requiredExp: string[];
    contractType: string[];
    rotation: string[];
    industry: string[];
    task: string[];
  };
}

export interface GetUserFilterDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof filterKeyObj.all>>): Promise<ResponseObjDef>;
}
