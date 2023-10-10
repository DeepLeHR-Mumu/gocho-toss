import { QueryFunctionContext } from "@tanstack/react-query";

import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { UserResumeApplyDef } from "../type";

export interface GetApplyArrResponseDef {
  data: UserResumeApplyDef[];
}

export interface GetApplyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof resumeArrKeyObj.applyArr>>): Promise<GetApplyArrResponseDef>;
}
