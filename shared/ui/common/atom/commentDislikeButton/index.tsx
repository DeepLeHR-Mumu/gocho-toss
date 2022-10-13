import { FunctionComponent } from "react";

import { CommentDislikeButtonProps } from "./type";
import { buttonCSS } from "./style";

export const CommentDislikeButton: FunctionComponent<CommentDislikeButtonProps> = ({
  isDisLiked,
  setDislikeSubmit,
  count,
}) => {
  return (
    <button css={buttonCSS(isDisLiked)} onClick={setDislikeSubmit} type="submit">
      연막 {count}
    </button>
  );
};
