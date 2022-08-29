import { FunctionComponent } from "react";

import { CommentDislikeButtonProps } from "./type";
import { buttonCSS } from "./style";

export const CommentDislikeButton: FunctionComponent<CommentDislikeButtonProps> =
  ({ setDislikeSubmit, count }) => {
    return (
      <button css={buttonCSS} onClick={setDislikeSubmit} type="submit">
        연막 {count}
      </button>
    );
  };
