import { FunctionComponent, KeyboardEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { useWriteComment } from "shared-api/community/useWriteComment";
import { communityCommentArrKeyObj } from "shared-constant/queryKeyFactory/community/commentArrKeyObj";
import { useUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { useToast } from "@recoil/hook/toast";

import { WriteCommentProps, CommentFormValues } from "./type";
import { formCSS, writeCommentBox, writeCommentWrapper, postCommentButton, container } from "./style";

export const WriteComment: FunctionComponent<WriteCommentProps> = ({ isWriteReComment, parentCommentId }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<CommentFormValues>({
    defaultValues: {
      postingId: Number(router.query.postingId),
      parentCommentId,
    },
  });

  const { data: userInfoData } = useUserInfo();
  const { mutate } = useWriteComment();

  const { setCurrentToast } = useToast();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    if (!userInfoData) {
      setCurrentToast("로그인이 필요한 서비스입니다.");
      return;
    }
    mutate(commentObj, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries(communityCommentArrKeyObj.all);
      },
    });
  };
  const enterSubmit = (changeEvent: KeyboardEvent<HTMLTextAreaElement>) => {
    if (changeEvent.key === "Enter" && changeEvent.shiftKey) {
      return;
    }
    if (changeEvent.keyCode === 229) return;
    if (changeEvent.key === "Enter") {
      changeEvent.preventDefault();
      handleSubmit(commentSubmit)();
    }
  };

  return (
    <div css={container}>
      <ProfileImg size="S" imageStr={userInfoData ? userInfoData.image : "default"} />
      <form css={formCSS} onSubmit={handleSubmit(commentSubmit)}>
        <div css={writeCommentWrapper}>
          <TextareaAutosize
            {...register("description", {
              required: true,
            })}
            css={writeCommentBox}
            maxRows={5}
            placeholder={isWriteReComment ? "대댓글을 입력하시겠어요?" : "댓글을 입력하시겠어요?"}
            onKeyDown={enterSubmit}
          />
          <button type="submit" css={postCommentButton} aria-label="댓글입력">
            <AiOutlineSend />
          </button>
        </div>
      </form>
    </div>
  );
};
