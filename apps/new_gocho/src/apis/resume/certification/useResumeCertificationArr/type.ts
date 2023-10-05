import { ResumeCertificationDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCertificationDef[];
}

export interface GetResumeCertificationArrDef {
  (resumeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCertificationArr = ReturnType<typeof selector>;
