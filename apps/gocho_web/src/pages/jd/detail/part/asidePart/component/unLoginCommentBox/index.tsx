import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import {
  commentArrCSS,
  commentBody,
  commentBox,
  commentContainerBlur,
  commentDesc,
  commentHeader,
  commentTypeCSS,
  loginBox,
  loginButton,
  loginDesc,
  nicknameCSS,
} from "./style";

export const UnLoginCommentBox: FunctionComponent = () => {
  const { setCurrentModal } = useModal();

  const showLoginModal = () => {
    setCurrentModal("loginModal");
  };

  return (
    <div>
      <section css={commentContainerBlur}>
        <ul css={commentArrCSS}>
          <li>
            <div css={commentHeader}>
              <h4 css={nicknameCSS}>유저닉네임</h4>
            </div>
            <div css={commentBody}>
              <div css={commentBox}>
                <h5 css={commentTypeCSS}>현재 공고 : 현재공고의 제목입니다.</h5>
                <p css={commentDesc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat assumenda excepturi autem officiis dignissimos,
                </p>
              </div>
            </div>
          </li>

          <li>
            <div css={commentHeader}>
              <h4 css={nicknameCSS}>유저닉네임</h4>
            </div>
            <div css={commentBody}>
              <div css={commentBox}>
                <h5 css={commentTypeCSS}>현재 공고 : 현재공고의 제목입니다.</h5>
                <p css={commentDesc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div css={loginBox}>
        <p css={loginDesc}>댓글이 궁금하시다면</p>
        <button css={loginButton} type="button" onClick={showLoginModal}>
          로그인/회원가입
        </button>
      </div>
    </div>
  );
};
