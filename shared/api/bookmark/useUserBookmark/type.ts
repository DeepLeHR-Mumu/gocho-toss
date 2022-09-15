import { userBookmarkKeyObj } from "@sharedConstant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { ResponseDef } from "@sharedType/api/responseType";

export interface GetUserBookmarkDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.bookmark>>): Promise<ResponseDef>;
}
