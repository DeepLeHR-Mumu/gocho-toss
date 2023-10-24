import { ResumeCareerDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCareerDef;
}

export interface GetResumeCareerDef {
  (resumeId: number, careerId?: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCareer = ReturnType<typeof selector>;
