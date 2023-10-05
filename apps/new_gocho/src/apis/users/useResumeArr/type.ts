import { ResumeDef } from "../type/resume";

export interface GetUserResumeArrDef {
  (userId: number): Promise<ResumeDef>;
}
