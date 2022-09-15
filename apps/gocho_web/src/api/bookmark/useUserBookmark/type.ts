import { userBookmarkKeyObj } from "@constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { ResponseDef } from "@type/api/responseType";

export interface GetUserBookmarkDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.bookmark>>): Promise<ResponseDef>;
}
