import { selector } from "./util";
import { ResumeFluencyDef } from "../type";

export interface ResponseObjDef {
  data: ResumeFluencyDef[];
}

export interface GetResumeFluencyArrDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeFluencyArr = ReturnType<typeof selector>;
