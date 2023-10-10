import { ResumeDef } from "../type";

export interface GetUserResumeArrDef {
  (userId: number): Promise<ResumeDef>;
}
