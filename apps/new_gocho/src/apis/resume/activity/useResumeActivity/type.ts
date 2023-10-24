import { ResumeActivityDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeActivityDef;
}

export interface GetResumeActivityDef {
  (resumeId: number, activityId?: number): Promise<ResponseObjDef>;
}

export type SelectorResumeActivity = ReturnType<typeof selector>;
