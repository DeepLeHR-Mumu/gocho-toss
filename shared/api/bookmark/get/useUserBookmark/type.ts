import { oldBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { ResponseDef } from "shared-type/api/responseType";

export interface GetUserBookmarkDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof oldBookmarkKeyObj.bookmark>>): Promise<ResponseDef>;
}
