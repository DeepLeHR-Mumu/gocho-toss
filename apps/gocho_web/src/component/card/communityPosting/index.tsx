import { FunctionComponent } from "react";

import {
  cardWrapper,
  topContainer,
  typeCreatorCSS,
  postingNicknameCSS,
  titleCSS,
  bodyCSS,
  commentCount,
  commentCSS,
  commentNickname,
  commentBody,
} from "./style";
import { CommunityPostingCardProps } from "./type";

export const CommunityPostingCard: FunctionComponent<
  CommunityPostingCardProps
> = ({ communityPostingData }) => {
  return (
    <article css={cardWrapper}>
      <div css={topContainer}>
        <p css={typeCreatorCSS(communityPostingData.type)}>
          {communityPostingData.type}
        </p>
        <p css={postingNicknameCSS}>닉네임 : {communityPostingData.nickname}</p>
      </div>
      <strong css={titleCSS}>{communityPostingData.title}</strong>
      <p css={bodyCSS}>{communityPostingData.description}</p>
      <div>
        {communityPostingData.commentArr.length !== 0 && (
          <>
            <p css={commentCount}>
              댓글 {communityPostingData.commentArr.length}개
            </p>
            <div css={commentCSS}>
              <span css={commentNickname}>
                {communityPostingData.commentArr[0]?.nickname}
              </span>
              <p css={commentBody}>
                {communityPostingData.commentArr[0]?.description}
              </p>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
