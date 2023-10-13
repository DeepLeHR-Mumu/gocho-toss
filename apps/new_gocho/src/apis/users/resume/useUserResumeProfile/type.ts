import { QueryFunctionContext } from "@tanstack/react-query";
import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { UserResumeProfileDef } from "../type";
import { selector } from "./util";

export interface GetUserResumeProfileResponseDef {
  userId: number;
  data: UserResumeProfileDef;
}

export interface GetUserResumeProfileDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof resumeArrKeyObj.resumeProfile>>): Promise<GetUserResumeProfileResponseDef>;
}

export type SelectorUserResumeProfile = ReturnType<typeof selector>;
