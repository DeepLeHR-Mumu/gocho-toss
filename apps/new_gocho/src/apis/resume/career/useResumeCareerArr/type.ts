import { ResumeCareerDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCareerDef[];
}

export interface GetResumeCareerArrDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCareerArr = ReturnType<typeof selector>;
