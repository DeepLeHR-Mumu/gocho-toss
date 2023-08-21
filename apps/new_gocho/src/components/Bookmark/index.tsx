import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { BookmarkProps } from "./type";
import { cssObj } from "./style";

export const Bookmark = ({ marked = false, ...props }: BookmarkProps) => {
  return marked ? (
    <AiFillHeart css={cssObj.bookmarkIcon(marked)} {...props} />
  ) : (
    <AiOutlineHeart css={cssObj.bookmarkIcon(marked)} {...props} />
  );
};
