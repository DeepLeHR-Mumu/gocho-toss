import { QueryFunctionContext } from "@tanstack/react-query";

import { PostingObjDef } from "../../community/type/posting";
import { communityPostingArrKeyObj } from "@sharedConstant/queryKeyFactory/community/postingArrKeyObj";

export interface ResponseObjDef {
  data: PostingObjDef[];
  nextPage: number;
}

export interface GetInfinitePostingArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof communityPostingArrKeyObj.infinite>>): Promise<ResponseObjDef>;
}
