import { ResumeHighSchoolDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeHighSchoolDef[];
}

export interface GetResumeHighschoolDef {
  (resumeId: number, highschoolId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeHighschool = ReturnType<typeof selector>;
