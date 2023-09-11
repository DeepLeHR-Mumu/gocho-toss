import { css } from "@emotion/react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

import { useCompanyCommentToggle } from "@/apis/company";

import { CommentThumbsProps } from "./type";
import { cssObj } from "./style";

export const CommentThumbs = ({ type, size, companyId, commentId, count, isClicked }: CommentThumbsProps) => {
  const { mutate: companyCommentToggle } = useCompanyCommentToggle({ companyId });

  const commentToggleHandler = () => {
    if (companyId && commentId) {
      companyCommentToggle({ type, companyId, commentId });
    }
  };

  return (
    <div
      css={css`
        ${cssObj[type === "likes" ? "thumbsUpWrapper" : "thumbsDownWrapper"](isClicked)}${cssObj[size]}
      `}
    >
      <button type="button">
        {type === "likes" ? (
          <FiThumbsUp onClick={commentToggleHandler} />
        ) : (
          <FiThumbsDown onClick={commentToggleHandler} />
        )}
      </button>
      <span>{count}</span>
    </div>
  );
};
