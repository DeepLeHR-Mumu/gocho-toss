import { FunctionComponent } from "react";

import { CommentLikeButtonProps } from "./type";
import { buttonCSS } from "./style";

export const CommentLikeButton: FunctionComponent<CommentLikeButtonProps> = ({ isLiked, setLikeSubmit, count }) => (
  <button css={buttonCSS(isLiked)} onClick={setLikeSubmit} type="submit">
    추천 {count}
  </button>
);
