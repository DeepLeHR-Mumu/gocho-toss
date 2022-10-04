import { oldBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { tipBookmarkResObjDef } from "../../type/bookmark";

export interface GetUserTipBookmarkArrDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof oldBookmarkKeyObj.tipBookmarkArr>>
  ): Promise<tipBookmarkResObjDef>;
}
