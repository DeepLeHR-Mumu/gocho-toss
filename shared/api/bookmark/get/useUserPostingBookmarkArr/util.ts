import { postingBookmarkResObjDef } from "../../type/bookmark";

export const selector = ({ data }: postingBookmarkResObjDef) => {
  if (data === null) {
    return null;
  }
  const result = data.map((bookmark) => {
    return bookmark;
  });

  return result;
};
