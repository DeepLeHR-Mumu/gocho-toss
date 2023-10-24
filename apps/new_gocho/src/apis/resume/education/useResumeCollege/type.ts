import { ResumeCollegeDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCollegeDef;
}

export interface GetResumeCollegeDef {
  (resumeId: number, collegeId?: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCollege = ReturnType<typeof selector>;
