import { postingBookmarkResObjDef } from "../../type/bookmark";

export const selector = ({ data }: postingBookmarkResObjDef) => {
  const result = data.map((bookmark) => {
    return bookmark;
  });

  return result;
};
