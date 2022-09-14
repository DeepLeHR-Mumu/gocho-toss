import { userBookmarkKeyObj } from "@constant/queryKeyFactory/bookmark/bookmarkKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { jobBookmarkObjDef } from "../type/bookmark";

interface ResponseObjDef {
  data: jobBookmarkObjDef[];
}

export interface GetUserJobBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userBookmarkKeyObj.jobBookmarkArr>>): Promise<ResponseObjDef>;
}
