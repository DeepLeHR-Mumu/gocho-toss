import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineSend } from "react-icons/ai";

import { ProfileImg } from "@component/common/atom/profileImg";
import { useUserInfo } from "@api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useWriteComment } from "@api/community/useWriteComment";
import { communityCommentArrKeyObj } from "@constant/queryKeyFactory/community/commentArrKeyObj";

import { WriteCommentProps, CommentFormValues } from "./type";
import { formCSS, userProfileImage, writeCommentBox, writeCommentWrapper, postCommentButton } from "./style";

export const WriteComment: FunctionComponent<WriteCommentProps> = ({ postingId, parentCommentId }) => {
  const { data: userInfoData } = useUserInfo();
  const { register, handleSubmit, reset } = useForm<CommentFormValues>({
    defaultValues: {
      postingId,
      parentCommentId,
    },
  });

  const { mutate } = useWriteComment();
  const queryClient = useQueryClient();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    mutate(commentObj, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries(communityCommentArrKeyObj.all);
      },
    });
  };

  return (
    <form css={formCSS} onSubmit={handleSubmit(commentSubmit)}>
      <div css={writeCommentWrapper}>
        <div css={userProfileImage}>{userInfoData && <ProfileImg imageStr={userInfoData.image} size="S" />}</div>
        <TextareaAutosize
          {...register("description", {
            required: true,
          })}
          css={writeCommentBox}
          maxRows={5}
          placeholder="댓글을 입력하시겠어요?"
        />
        <button type="submit" css={postCommentButton}>
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
};
