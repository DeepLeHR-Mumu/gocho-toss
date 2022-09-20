import { postingBookmarkObjDef } from "../type/bookmark";

export const selector = (data: postingBookmarkObjDef[]) => {
  return data.map((bookmark) => {
    return {
      id: bookmark.id,
    };
  });
};
