import { FunctionComponent, useRef, useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";
import { useWriteCompanyComment } from "shared-api/company/useWriteCompanyComment";
import { useLikeComment } from "shared-api/company/useLikeComment";
import { useDisLikeComment } from "shared-api/company/useDisLikeComment";
import { useFakeComment } from "shared-api/company/useFakeComment";
import { useDisFakeComment } from "shared-api/company/useDisFakeComment";
import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { dateConverter } from "shared-util/date";

import { LoginCommentBoxProps, CommentFormValues } from "./type";
import {
  commentArrCSS,
  commentBody,
  commentBox,
  commentContainer,
  commentDesc,
  commentHeader,
  commentTypeCSS,
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

export const LoginCommentBox: FunctionComponent<LoginCommentBoxProps> = ({ jdId, userData, companyId, commentArr }) => {
  const [textValue, setTextValue] = useState("");
  const commentBoxRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<CommentFormValues>({
    defaultValues: {
      companyId,
      jdId,
    },
  });

  const { mutate: postLikeComment } = useLikeComment();
  const { mutate: postDisLikeComment } = useDisLikeComment();
  const { mutate: postFakeComment } = useFakeComment();
  const { mutate: postDisFakeComment } = useDisFakeComment();
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    postWriteCompanyComment(commentObj, {
      onSuccess: () => {
        setTextValue("");
        queryClient.invalidateQueries(companyCommentArrKeyObj.all);
      },
    });
  };

  const postLikeSubmit = (id: number, commentId: number) => {
    postLikeComment(
      { companyId: id, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postFakeSubmit = (id: number, commentId: number) => {
    postFakeComment(
      { companyId: id, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDislikeSubmit = (id: number, commentId: number) => {
    postDisLikeComment(
      { companyId: id, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDisFakeSubmit = (id: number, commentId: number) => {
    postDisFakeComment(
      { companyId: id, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
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
            const { month, date } = dateConverter(comment.createdTime);
            const isMyComment = Boolean(userData.nickname === comment.nickname);
            return (
              <li key={comment.id}>
                <div css={commentHeader}>
                  <div css={nicknameCSS}>
                    {comment.nickname} <UserBadge badge={comment.badge} />
                  </div>
                  <p css={dateCSS}>
                    {month}.{date}
                  </p>
                </div>
                <div css={commentBody}>
                  <div css={commentBox(isMyComment)}>
                    <p css={commentTypeCSS}>{comment.title || "기업 정보"}</p>
                    <p css={commentDesc}>{comment.description}</p>
                  </div>
                  <ul css={evalButtonBox}>
                    <li>
                      <CommentLikeButton
                        count={comment.likeCount}
                        isLiked={comment.liked}
                        setLikeSubmit={() => {
                          return comment.liked
                            ? postDislikeSubmit(comment.companyId, comment.id)
                            : postLikeSubmit(comment.companyId, comment.id);
                        }}
                      />
                    </li>
                    <li>
                      <CommentDislikeButton
                        isDisLiked={comment.disLiked}
                        count={comment.disLikeCount}
                        setDislikeSubmit={() => {
                          return comment.disLiked
                            ? postDisFakeSubmit(comment.companyId, comment.id)
                            : postFakeSubmit(comment.companyId, comment.id);
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
                  jdId,
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
