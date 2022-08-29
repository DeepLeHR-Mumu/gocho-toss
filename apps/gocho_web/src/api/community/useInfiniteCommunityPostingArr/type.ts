import { QueryFunctionContext } from "@tanstack/react-query";

import { PostingObjDef } from "@api/community/type/posting";
import { communityPostingArrKeyObj } from "@constant/queryKeyFactory/community/postingArrKeyObj";

export interface ResponseObjDef {
  data: PostingObjDef[];
  nextPage: number;
}

export interface GetInfinitePostingArrDef {
  (
    requestObj: QueryFunctionContext<
      ReturnType<typeof communityPostingArrKeyObj.infinite>
    >
  ): Promise<ResponseObjDef>;
}
