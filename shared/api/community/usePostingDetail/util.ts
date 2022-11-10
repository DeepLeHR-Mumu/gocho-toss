import { PostingObjDef } from "../type/posting";

export const selector = (data: PostingObjDef) => {
  return {
    id: data.id,
    userID: data.user_id,
    title: data.title,
    description: data.description,
    type: data.type,
    createdTime: data.created_time,
    like: data.like,
    view: data.view,
    nickname: data.nickname,
    commentCount: data.comments.length,
    image: data.image,
  };
};
