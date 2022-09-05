import { QueryFunctionContext } from "@tanstack/react-query";

import { communityPostingArrKeyObj } from "@constant/queryKeyFactory/community/postingArrKeyObj";
import { PostingObjDef } from "@api/community/type/posting";

interface ResponseObjDef {
  data: PostingObjDef[];
}

export interface GetPostingArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof communityPostingArrKeyObj.postingArr>>): Promise<ResponseObjDef>;
}
