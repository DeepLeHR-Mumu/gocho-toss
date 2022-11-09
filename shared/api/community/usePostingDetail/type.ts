import { QueryFunctionContext } from "@tanstack/react-query";

import { communityPostingDetailKeyObj } from "shared-constant/queryKeyFactory/community/postingDetailKeyObj";
import { PostingObjDef } from "../type/posting";

export interface ResponseObjDef {
  data: PostingObjDef;
}

export interface GetPostingDetailDef {
  (
    requestObj: QueryFunctionContext<ReturnType<typeof communityPostingDetailKeyObj.postingDetail>>
  ): Promise<ResponseObjDef>;
}
