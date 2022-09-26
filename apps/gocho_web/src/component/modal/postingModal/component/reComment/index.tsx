import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteComment } from "shared-api/community/useDeleteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

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

export const ReComment: FunctionComponent<reCommentProps> = ({
  id,
  postingId,
  loginUserId,
  userId,
  body,
  nickname,
}) => {
  const [errorMsg] = useState<null | string>(null);
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
        <ProfileImg imageStr="default" size="S" />
        <p css={nicknameCSS}>{nickname}</p>
      </div>
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
