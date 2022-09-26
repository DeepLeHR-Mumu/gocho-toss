import { QueryFunctionContext } from "@tanstack/react-query";
import { oldBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { jobBookmarkResObjDef } from "../../type/bookmark";

export interface GetUserJobBookmarkArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof oldBookmarkKeyObj.jobBookmarkArr>>
  ): Promise<jobBookmarkResObjDef>;
}
