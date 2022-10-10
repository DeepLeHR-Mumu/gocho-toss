import { FunctionComponent } from "react";

import { dateConverter } from "shared-util/date/dateConverter";

import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { UserBadge } from "shared-ui/common/atom/userBadge";

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
} from "./style";
import { CommentProps } from "./type";

export const Comment: FunctionComponent<CommentProps> = ({ nickname, commentData }) => {
  // LATER 데이터가 너무 많아서 무조건 레이징로드, 무한스크롤 해야할듯
  const { year, month, date } = dateConverter(commentData.createdTime || 0);

  return (
    <div css={container}>
      <div css={writerContainer}>
        <p css={usernameCSS}>{commentData.nickname}</p>
        <UserBadge badge={commentData.badge} />
        <p css={dateCSS}>{`${year}/${month}/${date}`}</p>
      </div>

      <div css={bodyContainer(Boolean(nickname === commentData.nickname))}>
        <div css={bodyWrapper(Boolean(nickname === commentData.nickname))}>
          <p css={locationCSS}>{commentData.title || "기업 정보"}</p>
          <p css={bodyCSS}>{commentData.description}</p>
        </div>

        {/* TODO : 2주차 작업분 */}
        <div css={reactionContainer}>
          <CommentLikeButton
            count={commentData.likeCount}
            setLikeSubmit={() => {
              return undefined;
            }}
          />
          <CommentDislikeButton
            count={commentData.disLikeCount}
            setDislikeSubmit={() => {
              return undefined;
            }}
          />
        </div>
      </div>
    </div>
  );
};
