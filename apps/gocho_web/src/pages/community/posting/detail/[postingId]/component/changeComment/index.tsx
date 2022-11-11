import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useChangeComment } from "shared-api/community/useChangeComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";
import { buttonCSS, commentWrapper, formCSS, textCSS } from "./style";

export interface CommentFormValues {
  description: string;
  postingId: number;
  commentId: number;
}

export interface ChangeCommentProps {
  postingId: number;
  commentId: number;
  prevDesc: string;
  setIsChangeComment: Dispatch<SetStateAction<boolean>>;
}

export const ChangeComment: FunctionComponent<ChangeCommentProps> = ({
  setIsChangeComment,
  prevDesc,
  postingId,
  commentId,
}) => {
  const [description, setDescription] = useState(prevDesc);
  const { register, handleSubmit, reset } = useForm<CommentFormValues>({
    defaultValues: {
      postingId,
      commentId,
    },
  });

  const { mutate } = useChangeComment();
  const queryClient = useQueryClient();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    mutate(commentObj, {
      onSuccess: () => {
        setIsChangeComment(false);
        reset();
        queryClient.invalidateQueries(communityCommentArrKeyObj.all);
      },
    });
  };

  return (
    <div css={commentWrapper}>
      <form css={formCSS} onSubmit={handleSubmit(commentSubmit)}>
        <TextareaAutosize
          {...register("description", {
            required: true,
          })}
          css={textCSS}
          maxRows={5}
          onChange={(changeEvent) => {
            setDescription(changeEvent.currentTarget.value);
          }}
          value={description}
        />
        <button type="submit" aria-label="댓글 수정하기" css={buttonCSS}>
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};
