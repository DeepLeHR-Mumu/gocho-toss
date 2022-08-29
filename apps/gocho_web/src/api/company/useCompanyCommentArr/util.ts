import { CompanyCommentArrDef } from "../type/companyCommentArr";

export const selector = ({ company, comment_arr }: CompanyCommentArrDef) => {
  return {
    company: { name: company.name, logoUrl: company.logo_url },
    commentArr: comment_arr.map((comment) => {
      return {
        nickname: comment.nickname,
        jdTitle: comment.title,
        createdTime: comment.created_time,
        description: comment.description,
        like: comment.like,
        dislike: comment.dislike,
        id: comment.id,
        badge: comment.badge,
      };
    }),
  };
};
