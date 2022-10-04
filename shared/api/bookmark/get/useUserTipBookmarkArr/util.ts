import { tipBookmarkResObjDef } from "../../type/bookmark";

export const selector = ({ data }: tipBookmarkResObjDef) => {
  return data.map((bookmark) => {
    return bookmark;
  });
};
