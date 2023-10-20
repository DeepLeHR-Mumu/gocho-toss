import { ResumeEducationDef } from "../type";
import { selectEducation, selector } from "./util";

export interface ResponseObjDef {
  data: ResumeEducationDef[];
}

export interface GetResumeEducationDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeEducatioArr = ReturnType<typeof selector>;

export type SelectorResumeEducation = ReturnType<typeof selectEducation>;
