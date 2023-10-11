import { ResumeFluencyDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeFluencyDef[];
}

export interface GetResumeFluencyArrDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeFluencyArr = ReturnType<typeof selector>;
