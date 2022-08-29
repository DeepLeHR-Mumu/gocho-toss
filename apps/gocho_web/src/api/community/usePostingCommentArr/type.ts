import { communityCommentArrKeyObj } from "@constant/queryKeyFactory/community/commentArrKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";
import { PostingCommentObjDef } from "../type/postingComment";

interface ResponseObjDef {
  data: PostingCommentObjDef[];
}

export interface GetPostingCommentArrDef {
  (
    requestObj: QueryFunctionContext<
      ReturnType<typeof communityCommentArrKeyObj.commentArr>
    >
  ): Promise<ResponseObjDef>;
}
