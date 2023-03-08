import { CompanyCommentArrDef } from "../type/companyCommentArr";

export const selector = ({ company, comment_arr }: CompanyCommentArrDef) => {
  if (!comment_arr) {
    return {
      company: { name: company.name, logoUrl: company.logo_url, id: company.id },
      commentArr: null,
    };
  }
  return {
    company: { name: company.name, logoUrl: company.logo_url, id: company.id },
    commentArr: comment_arr.map((comment) => {
      return {
        id: comment.id,
        companyId: comment.company_id,
        jdId: comment.jd_id,
        userId: comment.user_id,
        nickname: comment.nickname,
        badge: comment.badge,
        description: comment.description,
        createdTime: comment.created_time,
        liked: comment.liked,
        disLiked: comment.disliked,
        title: comment.title,
        likeCount: comment.like_count,
        disLikeCount: comment.dislike_count,
      };
    }),
  };
};
