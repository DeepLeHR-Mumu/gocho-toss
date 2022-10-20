import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "shared-api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";

import { ChangeComment } from "../changeComment";
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
  const [isChangeComment, setIsChangeComment] = useState(false);
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
          <p css={nicknameCSS}>{nickname || "탈퇴한 회원"}</p>
        </div>
        <div css={bodyBox}>
          {isChangeComment ? (
            <ChangeComment
              setIsChangeComment={setIsChangeComment}
              prevDesc={body}
              postingId={postingId}
              commentId={id}
            />
          ) : (
            <p css={bodyCSS}>{body}</p>
          )}

          <div css={buttonContainer}>
            <button css={writeReCommentButtonBox} type="button" onClick={handleShowWriteComment}>
              {showWriteComment ? "닫기" : "답글"}
            </button>
            {loginUserId === userId && (
              <div css={settingButtonContainer}>
                <button
                  type="button"
                  css={settingButton}
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
        return <ReComment reComment={reComment} postingId={postingId} loginUserId={loginUserId} key={reComment.id} />;
      })}
    </div>
  );
};
