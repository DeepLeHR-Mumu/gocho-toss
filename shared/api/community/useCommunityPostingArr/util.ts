import { PostingObjDef } from "../type/posting";

export const selector = (data: PostingObjDef[]) => {
  return data.map((posting) => {
    return {
      id: posting.id,
      title: posting.title,
      description: posting.description,
      type: posting.type,
      nickname: posting.nickname,
      commentArr: posting.comments.map((comment) => {
        return { nickname: comment.nickname, description: comment.description };
      }),
    };
  });
};
