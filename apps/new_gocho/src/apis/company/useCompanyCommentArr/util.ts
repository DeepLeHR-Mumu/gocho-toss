import { CompanyCommentArrDef } from "../type/companyCommentArr";

export const selector = ({ company, comment_arr }: CompanyCommentArrDef) => {
  if (!comment_arr) {
    return {
      company: { name: company.name, logoUrl: company.logo_url, id: company.id },
      commentArr: [],
    };
  }
  return {
    company: { name: company.name, logoUrl: company.logo_url, id: company.id },
    commentArr: comment_arr.map((comment) => ({
        id: comment.id,
        uploader: {
          id: comment.uploader.id,
          nickname: comment.uploader.nickname,
          image: comment.uploader.image,
        },
        description: comment.description,
        createdTime: comment.created_time,
        likeCount: comment.like,
        isLiked: comment.is_liked,
        dislikeCount: comment.dislike,
        isDisliked: comment.is_disliked,
      })),
  };
};
