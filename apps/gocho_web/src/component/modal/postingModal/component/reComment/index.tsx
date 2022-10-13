import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "shared-api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";
// import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { ChangeComment } from "../changeComment";

import { reCommentProps } from "./type";
import {
  commentWrapper,
  nicknameBox,
  nicknameCSS,
  bodyBox,
  bodyCSS,
  settingButtonContainer,
  settingButton,
} from "./style";

export const ReComment: FunctionComponent<reCommentProps> = ({ reComment, postingId, loginUserId }) => {
  const [errorMsg] = useState<null | string>(null);
  const [isChangeComment, setIsChangeComment] = useState(false);
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
    <div css={commentWrapper}>
      <div css={nicknameBox}>
        {/* <ProfileImg imageStr={reComment.image} size="S" /> */}
        <p css={nicknameCSS}>{reComment.nickname}</p>
      </div>
      <div css={bodyBox}>
        {isChangeComment ? (
          <ChangeComment
            setIsChangeComment={setIsChangeComment}
            postingId={postingId}
            commentId={reComment.id}
            prevDesc={reComment.description}
          />
        ) : (
          <div css={bodyCSS}>{reComment.description}</div>
        )}

        {loginUserId === reComment.userId && (
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
                return commentDelete(postingId, reComment.id);
              }}
            >
              삭제
            </button>
          </div>
        )}
      </div>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
