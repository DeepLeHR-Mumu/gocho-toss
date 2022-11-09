import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "shared-api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { dateConverter } from "shared-util/date";

import { ChangeComment } from "../../component/changeComment";

import { CommentProps } from "./type";
import {
  commentWrapper,
  nicknameCSS,
  bodyBox,
  bodyCSS,
  settingButtonContainer,
  commentUserInfoBox,
  userBadgeCSS,
  myCommentButton,
  userInfoContainer,
  buttonContainer,
  dateCSS,
} from "./style";
import { WriteComment } from "../../component/writeComment";

export const CommentPart: FunctionComponent<CommentProps> = ({ commentData, postingId, loginUserId, isRecomment }) => {
  const [isChangeComment, setIsChangeComment] = useState(false);
  const [showWriteComment, setShowWriteComment] = useState<boolean>(false);

  const { mutate } = useDeleteComment();
  const queryClient = useQueryClient();

  const commentDelete = (commentPostingId: number, commentId: number) => {
    mutate(
      { postingId: commentPostingId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(communityCommentArrKeyObj.all);
        },
      }
    );
  };

  const handleShowWriteComment = () => {
    if (showWriteComment) return setShowWriteComment(false);
    return setShowWriteComment(true);
  };

  const { year, month, date } = dateConverter(commentData?.createdTime);

  return (
    <div css={commentWrapper(isRecomment)}>
      <div css={userInfoContainer}>
        <div css={commentUserInfoBox}>
          <ProfileImg imageStr={commentData?.image || "default"} size="S" />
          <p css={nicknameCSS}>{commentData?.nickname || "탈퇴한 회원"}</p>
          <div css={userBadgeCSS}>
            <UserBadge badge={commentData?.badge} />
          </div>
        </div>
        <div css={settingButtonContainer}>
          {!isRecomment && (
            <button css={myCommentButton} type="button" onClick={handleShowWriteComment}>
              {showWriteComment ? "닫기" : "대댓글"}
            </button>
          )}
          {loginUserId === commentData?.userId && (
            <>
              <button
                type="button"
                css={myCommentButton}
                aria-label={isChangeComment ? "수정 취소" : "댓글 수정"}
                onClick={() => {
                  setIsChangeComment((isPrev) => {
                    return !isPrev;
                  });
                }}
              >
                {isChangeComment ? "취소" : "수정"}
              </button>
              <button
                type="button"
                css={myCommentButton}
                onClick={() => {
                  return commentDelete(postingId, commentData?.id);
                }}
              >
                삭제
              </button>
            </>
          )}
        </div>
      </div>
      <div css={bodyBox}>
        {isChangeComment ? (
          <ChangeComment
            setIsChangeComment={setIsChangeComment}
            postingId={postingId}
            commentId={commentData?.id}
            prevDesc={commentData?.description}
          />
        ) : (
          <div css={bodyCSS(isRecomment)}>{commentData?.description}</div>
        )}
        <p css={dateCSS}>
          {year}.{month}.{date}
        </p>
      </div>
      {!isRecomment && (
        <div css={buttonContainer}>
          {showWriteComment && <WriteComment isWriteReComment parentCommentId={commentData.id} />}
        </div>
      )}
    </div>
  );
};
