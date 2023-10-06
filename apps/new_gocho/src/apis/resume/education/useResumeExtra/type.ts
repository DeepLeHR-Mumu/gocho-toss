import { ResumeExtrasDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeExtrasDef[];
}

export interface GetResumeExtrasDef {
  (resumeId: number, extraId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeExtras = ReturnType<typeof selector>;
