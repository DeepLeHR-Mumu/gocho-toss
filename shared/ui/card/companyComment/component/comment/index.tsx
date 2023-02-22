import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { dateConverter } from "shared-util/date/dateConverter";
import { useLikeComment } from "shared-api/company/useLikeComment";
import { useDisLikeComment } from "shared-api/company/useDisLikeComment";
import { useFakeComment } from "shared-api/company/useFakeComment";
import { useDisFakeComment } from "shared-api/company/useDisFakeComment";

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
import { CommentProps } from "./type";

export const Comment: FunctionComponent<CommentProps> = ({ nickname, commentData }) => {
  const queryClient = useQueryClient();
  const { mutate: postLikeComment } = useLikeComment();
  const { mutate: postDisLikeComment } = useDisLikeComment();
  const { mutate: postFakeComment } = useFakeComment();
  const { mutate: postDisFakeComment } = useDisFakeComment();

  const postLikeSubmit = (companyId: number, commentId: number) => {
    postLikeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postFakeSubmit = (companyId: number, commentId: number) => {
    postFakeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDislikeSubmit = (companyId: number, commentId: number) => {
    postDisLikeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDisFakeSubmit = (companyId: number, commentId: number) => {
    postDisFakeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

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

        <div css={reactionContainer}>
          <CommentLikeButton
            count={commentData.likeCount}
            isLiked={commentData.liked}
            setLikeSubmit={() =>
              commentData.liked
                ? postDislikeSubmit(commentData.companyId, commentData.id)
                : postLikeSubmit(commentData.companyId, commentData.id)
            }
          />
          <CommentDislikeButton
            count={commentData.disLikeCount}
            isDisLiked={commentData.disLiked}
            setDislikeSubmit={() =>
              commentData.disLiked
                ? postDisFakeSubmit(commentData.companyId, commentData.id)
                : postFakeSubmit(commentData.companyId, commentData.id)
            }
          />
        </div>
      </div>
    </div>
  );
};
