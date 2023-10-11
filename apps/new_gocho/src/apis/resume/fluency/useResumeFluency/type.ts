import { ResumeFluencyDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeFluencyDef;
}

export interface GetResumeFluencyDef {
  (resumeId: number, fluencyId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeFluency = ReturnType<typeof selector>;
