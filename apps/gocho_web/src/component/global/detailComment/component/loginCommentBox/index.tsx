import { FunctionComponent, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useWriteCompanyComment } from "shared-api/company/useWriteCompanyComment";
import { dateConverter } from "shared-util/date";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";
import { companyCommentArrKeyObj } from "shared-constant/queryKeyFactory/company/commentArrKeyObj";
import { useLikeComment } from "shared-api/company/useLikeComment";
import { useDisLikeComment } from "shared-api/company/useDisLikeComment";

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

export const LoginCommentBox: FunctionComponent<LoginCommentBoxProps> = ({
  jdId = null,
  companyData,
  commentArr,
  userData,
}) => {
  const commentBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, handleSubmit, reset } = useForm<CommentFormValues>({
    defaultValues: {
      companyId: companyData.id,
      jdId,
    },
  });

  const { mutate: postLikeComment } = useLikeComment();
  const { mutate: postDisLikeComment } = useDisLikeComment();
  const { mutate: postWriteCompanyComment } = useWriteCompanyComment();
  const queryClient = useQueryClient();

  const commentSubmit: SubmitHandler<CommentFormValues> = (commentObj) => {
    postWriteCompanyComment(commentObj, {
      onSuccess: () => {
        reset();
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
                  <div css={commentBox}>
                    {comment.title && <p css={commentTypeCSS}>{comment.title}</p>}

                    <p css={commentDesc}>{comment.description}</p>
                  </div>
                  <ul css={evalButtonBox}>
                    <li>
                      <CommentLikeButton
                        count={comment.likeCount}
                        setLikeSubmit={() => {
                          return comment.liked
                            ? postDislikeSubmit(comment.companyId, comment.id)
                            : postLikeSubmit(comment.companyId, comment.id);
                        }}
                      />
                    </li>
                    <li>
                      <CommentDislikeButton
                        count={comment.disLikeCount}
                        setDislikeSubmit={() => {
                          postDislikeSubmit(comment.companyId, comment.id);
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
          <textarea css={textareaCSS} placeholder="댓글을 입력해주세요." {...register("description")} />
          <button type="submit" css={submitButton}>
            <AiOutlineSend />
          </button>
        </form>
      </section>
    </div>
  );
};
