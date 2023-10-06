import { ResumeCertificationDef } from "../type";
import { selector } from "./util";

export interface ResponseObjDef {
  data: ResumeCertificationDef;
}

export interface GetResumeCertificationDef {
  (resumeId: number, certificationId: number): Promise<ResponseObjDef>;
}

export type SelectorResumeCertification = ReturnType<typeof selector>;
