import { CompanyCommentArrDef } from "../type/companyCommentArr";

export const selector = ({ company, comment_arr }: CompanyCommentArrDef) => {
  return {
    company: { name: company.name, logoUrl: company.logo_url, id: company.id },
    commentArr: comment_arr.map((comment) => {
      return {
        id: comment.id,
        companyId: comment.company_id,
        jdId: comment.jd_id,
        description: comment.description,
        userId: comment.user_id,
        createdTime: comment.created_time,
        liked: comment.liked,
        disLiked: comment.disliked,
        nickname: comment.nickname,
        title: comment.title,
        badge: comment.badge,
        likeCount: comment.like_count,
        disLikeCount: comment.dislike_count,
      };
    }),
  };
};
