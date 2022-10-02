import { ResponseObjDef } from "./type";

export const selector = (communityPostingArr: ResponseObjDef) => {
  return communityPostingArr.data.map((communityPosting) => {
    return {
      id: communityPosting.id,
      userID: communityPosting.user_id,
      title: communityPosting.title,
      description: communityPosting.description,
      type: communityPosting.type,
      createdTime: communityPosting.created_time,
      like: communityPosting.like,
      view: communityPosting.view,
      nickname: communityPosting.nickname,
      commentCount: communityPosting.comments.length,
      image: communityPosting.image,
    };
  });
};
