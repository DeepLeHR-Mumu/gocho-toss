import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { postingBookmarkResObjDef } from "../../type/bookmark";

export interface GetUserPostingBookmarkArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.postingBookmarkArr>>
  ): Promise<postingBookmarkResObjDef>;
}
