import { ResumeCertificationDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCertificationDef;
}

export interface GetResumeCertificationDef {
  (resumeId: number, collegeId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCertification = ReturnType<typeof selector>;
