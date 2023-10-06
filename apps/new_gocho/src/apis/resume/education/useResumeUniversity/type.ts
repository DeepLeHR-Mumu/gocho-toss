import { ResumeUniversityDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeUniversityDef[];
}

export interface GetResumeUniversityDef {
  (resumeId: number, universityId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeUniversity = ReturnType<typeof selector>;
