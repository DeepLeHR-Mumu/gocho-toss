import { FunctionComponent } from "react";

import { CommentLikeButtonProps } from "./type";
import { buttonCSS } from "./style";

export const CommentLikeButton: FunctionComponent<CommentLikeButtonProps> = ({ setLikeSubmit, count }) => {
  return (
    <button css={buttonCSS} onClick={setLikeSubmit} type="submit">
      추천 {count}
    </button>
  );
};
