import { FunctionComponent } from "react";

import { dateConverter } from "shared-util";
import { useUserProfile } from "shared-api/auth";
import { useCompanyCommentToggle } from "shared-api/company/";

import { CommentDislikeButton } from "../../../../common/atom/commentDislikeButton";
import { CommentLikeButton } from "../../../../common/atom/commentLikeButton";

import {
  container,
  writerContainer,
  usernameCSS,
  dateCSS,
  bodyContainer,
  bodyWrapper,
  bodyCSS,
  reactionContainer,
} from "./style";
import { CommentProps } from "./type";

export const Comment: FunctionComponent<CommentProps> = ({ commentData, company }) => {
  const { data: userInfoData } = useUserProfile();
  const { mutate: commentToggle } = useCompanyCommentToggle({ companyId: company.id });

  const postCommentToggleHandler = (type: "likes" | "dislikes") => {
    commentToggle({ companyId: company.id, commentId: commentData.id, type });
  };

  const { date: createDate } = dateConverter(commentData.createdTime);

  return (
    <div css={container}>
      <div css={writerContainer}>
        <p css={usernameCSS}>{commentData.uploader.nickname}</p>
        <p css={dateCSS}>{createDate}</p>
      </div>

      <div css={bodyContainer(Boolean(userInfoData?.nickname === commentData.uploader.nickname))}>
        <div css={bodyWrapper(Boolean(userInfoData?.nickname === commentData.uploader.nickname))}>
          <p css={bodyCSS}>{commentData.description}</p>
        </div>
        <div css={reactionContainer}>
          <CommentLikeButton
            count={commentData.likeCount}
            isLiked={commentData.isLiked}
            setLikeSubmit={() => postCommentToggleHandler("likes")}
          />
          <CommentDislikeButton
            count={commentData.dislikeCount}
            isDisLiked={commentData.isDisliked}
            setDislikeSubmit={() => postCommentToggleHandler("dislikes")}
          />
        </div>
      </div>
    </div>
  );
};
