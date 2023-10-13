import { ResumeDef } from "../type";

interface UserResumeResponseDef {
  data: ResumeDef[];
}

export interface GetUserResumeArrDef {
  (userId: number): Promise<UserResumeResponseDef>;
}
