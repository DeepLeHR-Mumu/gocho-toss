import { ResumeExtraDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeExtraDef;
}

export interface GetResumeExtraDef {
  (resumeId: number, extraId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeExtra = ReturnType<typeof selector>;
