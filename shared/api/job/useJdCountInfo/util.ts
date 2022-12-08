import { ResponseObjDef } from "./type";

export const selector = ({ data }: ResponseObjDef) => {
  return { bookmarkCount: data.bookmark, veiwCount: data.view, commentCount: data.comment_count };
};
