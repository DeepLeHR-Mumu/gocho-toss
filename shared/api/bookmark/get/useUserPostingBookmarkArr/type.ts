import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { postingBookmarkObjDef } from "../../type/bookmark";

interface ResponseObjDef {
  data: postingBookmarkObjDef[];
}

export interface GetUserPostingBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.postingBookmarkArr>>): Promise<ResponseObjDef>;
}
