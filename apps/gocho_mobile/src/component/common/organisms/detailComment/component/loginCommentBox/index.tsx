import { FunctionComponent, useRef, useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";
import { useWriteCompanyComment } from "shared-api/company/useWriteCompanyComment";
import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { useLikeComment } from "shared-api/company/useLikeComment";
import { useDisLikeComment } from "shared-api/company/useDisLikeComment";
import { useFakeComment } from "shared-api/company/useFakeComment";
import { useDisFakeComment } from "shared-api/company/useDisFakeComment";

import { LoginCommentBoxProps, CommentFormValues } from "./type";
import {
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

export const LoginCommentBox: FunctionComponent<LoginCommentBoxProps> = ({
  jdId,
  companyData,
  commentArr,
  userData,
}) => {
  const commentBoxRef = useRef<HTMLDivElement | null>(null);
  const [textValue, setTextValue] = useState("");
  const { nickname } = userData;
  const { register, handleSubmit, setValue, watch } = useForm<CommentFormValues>({
    defaultValues: {
      companyId: companyData.id,
      jdId,
    },
  });

  useEffect(() => {
    const jdValue = watch("jdId");
    if (jdValue) {
      return setValue("jdId", jdId);
    }
    return setValue("jdId", null);
  }, [jdId, setValue, watch]);

  const { mutate: postLikeComment } = useLikeComment();
  const { mutate: postDisLikeComment } = useDisLikeComment();
  const { mutate: postFakeComment } = useFakeComment();
  const { mutate: postDisFakeComment } = useDisFakeComment();

  const { mutate: postWriteCompanyComment, isSuccess } = useWriteCompanyComment();
  const queryClient = useQueryClient();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    postWriteCompanyComment(commentObj, {
      onSuccess: () => {
        setTextValue("");
        queryClient.invalidateQueries(companyCommentArrKeyObj.all);
      },
    });
  };

  const postLikeSubmit = (companyId: number, commentId: number) => {
    postLikeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postFakeSubmit = (companyId: number, commentId: number) => {
    postFakeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDislikeSubmit = (companyId: number, commentId: number) => {
    postDisLikeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const postDisFakeSubmit = (companyId: number, commentId: number) => {
    postDisFakeComment(
      { companyId, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyCommentArrKeyObj.all);
        },
      }
    );
  };

  const activeDownScroll = () => {
    const bottomHeight = commentBoxRef.current?.scrollHeight;
    commentBoxRef.current?.scrollTo(0, bottomHeight !== undefined ? bottomHeight : 0);
  };

  useEffect(() => {
    setTimeout(() => {
      activeDownScroll();
    }, 100);
  }, [jdId, isSuccess]);

  return (
    <div>
      <section css={commentContainer} ref={commentBoxRef}>
        <ul>
          {commentArr.length === 0 && (
            <li css={firstCommentAlert}>
              작성된 코멘트가 없습니다
              <br />
              첫번째 댓글을 작성해주세요 :)
            </li>
          )}
          {commentArr.map((comment) => {
            const { month, date } = dateConverter(comment.createdTime);
            const isMyComment = Boolean(nickname === comment.nickname);

            return (
              <li key={comment.id}>
                <div css={commentHeader}>
                  <p css={nicknameCSS}>
                    {comment.nickname} <UserBadge badge={comment.badge} />
                  </p>
                  <p css={dateCSS}>
                    {month}.{date}
                  </p>
                </div>
                <div css={commentBody}>
                  <div css={commentBox(isMyComment)}>
                    {comment.title && <p css={commentTypeCSS}>{comment.title || "기업 정보"}</p>}
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
        <p css={userNicknameCSS}>
          {userData.nickname}
          <UserBadge badge={userData.badge} />
        </p>
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
                  companyId: companyData.id,
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
