import { tipBookmarkResObjDef } from "../../type/bookmark";

export const selector = ({ data }: tipBookmarkResObjDef) => {
  if (data === null) {
    return null;
  }
  return data.map((bookmark) => {
    return bookmark;
  });
};
