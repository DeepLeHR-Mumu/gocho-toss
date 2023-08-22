import { ResponseObjDef } from "./type";

export const selector = ({ data }: ResponseObjDef) => {
  return { bookmarkCount: data.bookmark, viewCount: data.view, commentCount: data.comment_count };
};
