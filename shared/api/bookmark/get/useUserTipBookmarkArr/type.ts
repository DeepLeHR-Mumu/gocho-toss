import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { tipBookmarkObjDef } from "../../type/bookmark";

interface ResponseObjDef {
  data: tipBookmarkObjDef[];
}

export interface GetUserTipBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.tipBookmarkArr>>): Promise<ResponseObjDef>;
}
