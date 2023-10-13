import { css } from "@emotion/react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

import axios from "axios";
import { useCompanyCommentToggle } from "@/apis/company";

import { CommentThumbsProps } from "./type";
import { cssObj } from "./style";

export const CommentThumbs = ({ type, size, companyId, commentId, count, isClicked }: CommentThumbsProps) => {
  const { mutate: companyCommentToggle } = useCompanyCommentToggle({ companyId });

  const commentToggleHandler = () => {
    if (companyId && commentId) {
      companyCommentToggle(
        { type, companyId, commentId },
        {
          onError: (error) => {
            if (axios.isAxiosError(error) && error.response?.status === 409) {
              if (type === "likes")
                companyCommentToggle(
                  { type: "dislikes", companyId, commentId },
                  {
                    onSuccess: () => {
                      companyCommentToggle({ type, companyId, commentId });
                    },
                  }
                );
              else
                companyCommentToggle(
                  { type: "likes", companyId, commentId },
                  {
                    onSuccess: () => {
                      companyCommentToggle({ type, companyId, commentId });
                    },
                  }
                );
            }
            return error;
          },
        }
      );
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
