import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEnter } from "react-icons/ai";

import { useDeleteComment } from "@api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "@constant/queryKeyFactory/community/commentArrKeyObj";

import { CommentProps } from "./type";
import {
  wrapper,
  commentWrapper,
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
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
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
        <div css={nicknameCSS}>{nickname}</div>
        <div css={bodyBox}>
          <div css={bodyCSS}>{body}</div>
          <div css={buttonContainer}>
            <button css={writeReCommentButtonBox} type="button" onClick={handleShowWriteComment}>
              <AiOutlineEnter />
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
