import { QueryFunctionContext } from "@tanstack/react-query";

import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { PostingObjDef } from "../../community/type/posting";

interface ResponseObjDef {
  data: PostingObjDef[];
}

export interface GetPostingArrDef {
  (requestObj: QueryFunctionContext<ReturnType<typeof communityPostingArrKeyObj.postingArr>>): Promise<ResponseObjDef>;
}
