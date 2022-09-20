import { FunctionComponent } from "react";
import { AiOutlineSend } from "react-icons/ai";

import { dateConverter } from "shared-util/date";
import { UserBadge } from "shared-ui/common/atom/userBadge";
import { CommentLikeButton } from "shared-ui/common/atom/commentLikeButton";
import { CommentDislikeButton } from "shared-ui/common/atom/commentDislikeButton";

import { LoginCommentBoxProps } from "./type";
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
        <ul css={commentArrCSS}>
          {commentArr.map((comment) => {
            const { month, date } = dateConverter(comment.createdTime);
            return (
              <li key={comment.id}>
                <div css={commentHeader}>
                  <h4 css={nicknameCSS}>
                    {comment.nickname} <UserBadge badge={comment.badge} />
                  </h4>
                  <p css={dateCSS}>
                    {month}.{date}
                  </p>
                </div>
                <div css={commentBody}>
                  <div css={commentBox}>
                    {comment.jdTitle && <h5 css={commentTypeCSS}>{comment.jdTitle}</h5>}

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
        <h4 css={userNicknameCSS}>
          {userData.nickname}
          <UserBadge badge={userData.badge} />
        </h4>
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
