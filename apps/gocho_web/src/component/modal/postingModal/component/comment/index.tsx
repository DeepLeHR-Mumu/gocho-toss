import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "shared-api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";

// import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { CommentProps } from "./type";
import {
  wrapper,
  commentWrapper,
  nicknameBox,
  nicknameCSS,
  bodyBox,
  bodyCSS,
  buttonContainer,
  writeReCommentButtonBox,
  settingButtonContainer,
  settingButton,
} from "./style";
import { ReComment } from "../reComment";
import { WriteComment } from "../writeComment";

export const Comment: FunctionComponent<CommentProps> = ({
  id,
  postingId,
  userId,
  loginUserId,
  body,
  reCommentList,
  nickname,
}) => {
  const [showWriteComment, setShowWriteComment] = useState<boolean>(false);
  const [errorMsg] = useState<null | string>(null);
  const handleShowWriteComment = () => {
    if (showWriteComment) return setShowWriteComment(false);
    return setShowWriteComment(true);
  };

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

  return (
    <div css={wrapper}>
      <div css={commentWrapper}>
        <div css={nicknameBox}>
          {/* <ProfileImg imageStr="default" size="S" /> */}
          <p css={nicknameCSS}>{nickname}</p>
        </div>
        <div css={bodyBox}>
          <p css={bodyCSS}>{body}</p>
          <div css={buttonContainer}>
            <button css={writeReCommentButtonBox} type="button" onClick={handleShowWriteComment}>
              답글
            </button>
            {loginUserId === userId && (
              <div css={settingButtonContainer}>
                <button type="button" css={settingButton}>
                  수정
                </button>
                <button
                  type="button"
                  css={settingButton}
                  onClick={() => {
                    return commentDelete(postingId, id);
                  }}
                >
                  삭제
                </button>
              </div>
            )}
            {errorMsg && <p> {errorMsg}</p>}
            {showWriteComment && <WriteComment postingId={postingId} parentCommentId={id} />}
          </div>
        </div>
      </div>
      {reCommentList.map((reComment) => {
        return (
          <ReComment
            id={reComment.id}
            postingId={postingId}
            userId={reComment.userId}
            loginUserId={loginUserId}
            body={reComment.description}
            nickname={reComment.nickname}
            emblem={reComment.badge}
            key={reComment.id}
          />
        );
      })}
    </div>
  );
};
