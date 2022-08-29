import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "@api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "@constant/queryKeyFactory/community/commentArrKeyObj";

import { reCommentProps } from "./type";
import {
  commentWrapper,
  nicknameCSS,
  bodyBox,
  bodyCSS,
  settingButtonContainer,
  settingButton,
} from "./style";

export const ReComment: FunctionComponent<reCommentProps> = ({
  id,
  postingId,
  loginUserId,
  userId,
  body,
  nickname,
}) => {
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const { mutate } = useDeleteComment();
  const queryClient = useQueryClient();

  const commentDelete = (commentPostingId: number, commentId: number) => {
    mutate(
      { postingId: commentPostingId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(communityCommentArrKeyObj.all);
        },
        onError: (err) => {
          setErrorMsg(err.response?.data.error.errorMessage);
        },
      }
    );
  };

  return (
    <div css={commentWrapper}>
      <div css={nicknameCSS}>{nickname}</div>
      <div css={bodyBox}>
        <div css={bodyCSS}>{body}</div>
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
      </div>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
