import { ResumeHighSchoolDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeHighSchoolDef;
}

export interface GetResumeHighSchoolDef {
  (resumeId: number, highschoolId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeHighSchool = ReturnType<typeof selector>;
