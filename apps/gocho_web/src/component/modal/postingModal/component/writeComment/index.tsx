import { FunctionComponent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useWriteComment } from "shared-api/community/useWriteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";

import { WriteCommentProps, CommentFormValues } from "./type";
import { formCSS, writeCommentBox, writeCommentWrapper, postCommentButton } from "./style";

export const WriteComment: FunctionComponent<WriteCommentProps> = ({ postingId, parentCommentId }) => {
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
        <TextareaAutosize
          {...register("description", {
            required: true,
          })}
          css={writeCommentBox}
          maxRows={5}
          placeholder="댓글을 입력하시겠어요?"
        />
        <button type="submit" css={postCommentButton} aria-label="댓글입력">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
};
