import { QueryFunctionContext } from "@tanstack/react-query";
import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { UserApplyStaticDef } from "../type";

export interface GetUserApplyStaticDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof resumeArrKeyObj.applyStatic>>): Promise<{
    userId: number;
    data: UserApplyStaticDef;
  }>;
}
