import { QueryFunctionContext } from "@tanstack/react-query";

import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { PostingObjDef } from "../type/posting";

export interface ResponseObjDef {
  data: PostingObjDef[];
  nextPage: number;
}

export interface GetInfinitePostingArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof communityPostingArrKeyObj.infinite>>): Promise<ResponseObjDef>;
}
