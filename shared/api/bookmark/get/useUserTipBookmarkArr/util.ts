import { tipBookmarkObjDef } from "../../type/bookmark";

export const selector = (data: tipBookmarkObjDef[]) => {
  return data.map((bookmark) => {
    return {
      id: bookmark.id,
    };
  });
};
