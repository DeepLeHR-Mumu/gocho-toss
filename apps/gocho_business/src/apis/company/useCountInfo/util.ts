import { ResponseObjDef } from "./type";

export const countInfoSelector = ({ data }: ResponseObjDef) => ({
  commentInfo: data.comment_count,
  bookmark: data.bookmark,
  view: data.view,
});
