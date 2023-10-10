import { QueryFunctionContext } from "@tanstack/react-query";
import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { UserResumeProfileDef } from "../type";

export interface RequestObj {
  userId: number;
}

export interface GetUserResumeProfileResponseDef {
  userId: number;
  data: UserResumeProfileDef;
}

export interface GetUserResumeProfileDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof resumeArrKeyObj.resumeProfile>>): Promise<GetUserResumeProfileResponseDef>;
}
