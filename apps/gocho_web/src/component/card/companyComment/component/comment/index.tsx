import { FunctionComponent } from "react";

import { dateConverter } from "shared-util/date/dateConverter";

import {
  container,
  writerContainer,
  usernameCSS,
  dateCSS,
  bodyContainer,
  bodyWrapper,
  locationCSS,
  bodyCSS,
  reactionContainer,
  likeButton,
  dislikeButton,
} from "./style";
import { CommentProps } from "./type";

export const Comment: FunctionComponent<CommentProps> = ({ commentData }) => {
  // LATER 데이터가 너무 많아서 무조건 레이징로드, 무한스크롤 해야할듯
  const { year, month, date } = dateConverter(commentData.createdTime || 0);
  return (
    <div css={container}>
      <div css={writerContainer}>
        <p css={usernameCSS}>{commentData.nickname}</p>
        <p css={dateCSS}>{`${year}/${month}/${date}`}</p>
      </div>
      <div css={bodyContainer}>
        <div css={bodyWrapper}>
          <p css={locationCSS}>{commentData.jdTitle || "기업 정보"}</p>
          <p css={bodyCSS}>{commentData.description}</p>
        </div>
        <div css={reactionContainer}>
          <button type="button" css={likeButton}>
            추천 {commentData.like}
          </button>
          <button type="button" css={dislikeButton}>
            연막 {commentData.dislike}
          </button>
        </div>
      </div>
    </div>
  );
};
