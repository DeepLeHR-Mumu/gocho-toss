import { QueryFunctionContext } from "@tanstack/react-query";
import { filterKeyObj } from "@constant/queryKeyFactory/filter/filterKeyObj";

export interface ResponseObjDef {
  possibleEdu: string[];
  place: string[];
  requiredExp: string[];
  contractType: string[];
  rotation: string[];
  industry: string[];
  task: string[];
  searchWord: string;
}

export interface PostDoUserFilterDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof filterKeyObj.post>>): Promise<ResponseObjDef>;
}
