import { FunctionComponent } from "react";

import { CommentDislikeButton } from "../../../../common/atom/commentDislikeButton";
import { CommentLikeButton } from "../../../../common/atom/commentLikeButton";
import { UserBadge } from "../../../../common/atom/userBadge";

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

export const UnLoginComment: FunctionComponent = () => {
  return (
    <div css={container}>
      <div css={writerContainer}>
        <p css={usernameCSS}>userName</p>
        <UserBadge badge="default" />
        <p css={dateCSS}>07.15</p>
      </div>

      <div css={bodyContainer}>
        <div css={bodyWrapper(false)}>
          <p css={locationCSS}>기업정보</p>
          <p css={bodyCSS}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div css={reactionContainer}>
          <CommentLikeButton
            isLiked={false}
            count={0}
            setLikeSubmit={() => {
              return undefined;
            }}
          />
          <CommentDislikeButton
            isDisLiked={false}
            count={0}
            setDislikeSubmit={() => {
              return undefined;
            }}
          />
        </div>
      </div>
    </div>
  );
};
