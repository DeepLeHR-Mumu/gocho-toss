import { QueryFunctionContext } from "@tanstack/react-query";

import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { UserResumeApplyDef } from "../type";

export interface RequestObj {
  userId: number;
  filter?: "complte" | "cancel" | "read" | "unread";
  page?: number;
  size?: number;
}

export interface GetApplyArrResponseDef {
  data: UserResumeApplyDef[];
}

export interface GetApplyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof resumeArrKeyObj.applyArr>>): Promise<GetApplyArrResponseDef>;
}
