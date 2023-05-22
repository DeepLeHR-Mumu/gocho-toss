import { FunctionComponent, useRef, useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";
import { useWriteCompanyComment } from "shared-api/company/useWriteCompanyComment";
import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { useCompanyCommentToggle } from "shared-api/company";
import { dateConverter } from "shared-util";

import { LoginCommentBoxProps, CommentFormValues } from "./type";
import {
  commentArrCSS,
  commentBody,
  commentBox,
  commentContainer,
  commentDesc,
  commentHeader,
  dateCSS,
  evalButtonBox,
  formCSS,
  nicknameCSS,
  submitButton,
  textareaCSS,
  userNicknameCSS,
  writeContainer,
  firstCommentAlert,
} from "./style";

export const LoginCommentBox: FunctionComponent<LoginCommentBoxProps> = ({ userData, companyId, commentArr }) => {
  const [textValue, setTextValue] = useState("");
  const commentBoxRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<CommentFormValues>({
    defaultValues: {
      companyId,
    },
  });

  const { mutate: companyCommentToggle } = useCompanyCommentToggle({ companyId });
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    if (textValue.trim().length === 0) {
      return;
    }
    postWriteCompanyComment(commentObj, {
      onSuccess: () => {
        setTextValue("");
        queryClient.invalidateQueries(companyCommentArrKeyObj.all);
      },
    });
  };

  useEffect(() => {
    const bottomHeight = commentBoxRef.current?.scrollHeight;
    commentBoxRef.current?.scrollTo(0, bottomHeight !== undefined ? bottomHeight : 0);
  }, [commentArr]);

  return (
    <div>
      <section css={commentContainer} ref={commentBoxRef}>
        <ul css={commentArrCSS}>
          {commentArr.length === 0 && (
            <li css={firstCommentAlert}>
              작성된 코멘트가 없습니다
              <br />
              첫번째 댓글을 작성해주세요 :)
            </li>
          )}

          {commentArr.map((comment) => {
            const { date: createDate } = dateConverter(comment.createdTime);
            const isMyComment = Boolean(userData.nickname === comment.uploader.nickname);
            return (
              <li key={comment.id}>
                <div css={commentHeader}>
                  <div css={nicknameCSS}>{comment.uploader.nickname}</div>
                  <p css={dateCSS}>{createDate}</p>
                </div>
                <div css={commentBody}>
                  <div css={commentBox(isMyComment)}>
                    <p css={commentDesc}>{comment.description}</p>
                  </div>
                  <ul css={evalButtonBox}>
                    <li>
                      <CommentLikeButton
                        count={comment.likeCount}
                        isLiked={comment.isLiked}
                        setLikeSubmit={() => {
                          companyCommentToggle({ companyId, commentId: comment.id, type: "likes" });
                        }}
                      />
                    </li>
                    <li>
                      <CommentDislikeButton
                        isDisLiked={comment.isDisliked}
                        count={comment.dislikeCount}
                        setDislikeSubmit={() => {
                          companyCommentToggle({ companyId, commentId: comment.id, type: "dislikes" });
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section css={writeContainer}>
        <div css={userNicknameCSS}>
          {userData.nickname}
          <UserBadge badge={userData.badge} />
        </div>
        <form css={formCSS} onSubmit={handleSubmit(commentSubmit)}>
          <textarea
            css={textareaCSS}
            placeholder="댓글을 입력해주세요."
            value={textValue}
            {...register("description")}
            onChange={(changeEvent) => {
              setTextValue(changeEvent.currentTarget.value);
            }}
            onKeyDown={(onKeyDownEvent) => {
              if (onKeyDownEvent.keyCode === 229) return;

              if (onKeyDownEvent.key === "Enter") {
                onKeyDownEvent.preventDefault();
                commentSubmit({
                  companyId,
                  description: textValue,
                });
              }
            }}
          />
          <button type="submit" css={submitButton} aria-label="댓글 작성">
            <AiOutlineSend />
          </button>
        </form>
      </section>
    </div>
  );
};
