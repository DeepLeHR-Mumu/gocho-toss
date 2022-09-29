import { FunctionComponent } from "react";
import { AiOutlineSend } from "react-icons/ai";

import { dateConverter } from "shared-util/date";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";

import { LoginCommentBoxProps } from "./type";
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

export const LoginCommentBox: FunctionComponent<LoginCommentBoxProps> = ({ commentArr, userData }) => {
  const postLikeSubmit = () => {
    return true;
  };

  const postDislikeSubmit = () => {
    return true;
  };

  return (
    <div>
      <section css={commentContainer}>
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
                  <div css={commentBox}>
                    {comment.jdTitle && <p css={commentTypeCSS}>{comment.jdTitle}</p>}

                    <p css={commentDesc}>{comment.description}</p>
                  </div>
                  <ul css={evalButtonBox}>
                    <li>
                      <CommentLikeButton count={comment.like} setLikeSubmit={postLikeSubmit} />
                    </li>
                    <li>
                      <CommentDislikeButton count={comment.dislike} setDislikeSubmit={postDislikeSubmit} />
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
        <form css={formCSS}>
          <textarea css={textareaCSS} placeholder="댓글을 입력해주세요." />
          <button type="submit" css={submitButton}>
            <AiOutlineSend />
          </button>
        </form>
      </section>
    </div>
  );
};
