import { ResumeEducationDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeEducationDef[];
}

export interface GetResumeEducationDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeEducation = ReturnType<typeof selector>;
