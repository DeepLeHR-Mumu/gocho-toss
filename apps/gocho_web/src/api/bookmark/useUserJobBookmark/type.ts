import { userJobBookmarkArrKeyObj } from "@constant/queryKeyFactory/bookmark/jobArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { JobBookmarkObjDef } from "../type/jobBookmark";

interface ResponseObjDef {
  data: JobBookmarkObjDef[];
}

export interface GetUserJobBookmarkArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof userJobBookmarkArrKeyObj.bookmarkArr>>): Promise<ResponseObjDef>;
}
