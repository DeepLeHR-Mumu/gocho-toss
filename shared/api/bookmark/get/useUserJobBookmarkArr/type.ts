import { QueryFunctionContext } from "@tanstack/react-query";
import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { jobBookmarkResObjDef } from "../../type/bookmark";

export interface GetUserJobBookmarkArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.jobBookmarkArr>>
  ): Promise<jobBookmarkResObjDef>;
}
