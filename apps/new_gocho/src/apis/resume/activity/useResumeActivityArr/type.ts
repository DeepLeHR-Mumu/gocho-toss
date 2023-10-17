import { ResumeActivityDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeActivityDef[];
}

export interface GetResumeActivityArrDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeActivityArr = ReturnType<typeof selector>;
