import { PostingCommentObjDef } from "../type/postingComment";

export const selector = (commentArr: PostingCommentObjDef[]) => {
  return commentArr.map((comment) => {
    return {
      id: comment.id,
      parentCommentId: comment.parent_comment_id,
      userId: comment.user_id,
      description: comment.description,
      badge: comment.badge,
      nickname: comment.nickname,
      image: comment.image,
    };
  });
};
