import { FunctionComponent } from "react";

import { NormalButton } from "shared-ui/common/atom/button";
import { useModal } from "@/globalStates";

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
  const { setModal } = useModal();

  const showLoginModal = () => {
    setModal("loginModal", { button: "close" });
  };

  return (
    <div>
      <section css={commentContainerBlur}>
        <ul css={commentArrCSS}>
          <li>
            <div css={commentHeader}>
              <p css={nicknameCSS}>유저닉네임</p>
            </div>
            <div css={commentBody}>
              <div css={commentBox}>
                <p css={commentTypeCSS}>현재 공고 : 현재공고의 제목입니다.</p>
                <p css={commentDesc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda excepturi autem officiis
                  dignissimos,
                </p>
              </div>
            </div>
          </li>

          <li>
            <div css={commentHeader}>
              <p css={nicknameCSS}>유저닉네임</p>
            </div>
            <div css={commentBody}>
              <div css={commentBox}>
                <p css={commentTypeCSS}>현재 공고 : 현재공고의 제목입니다.</p>
                <p css={commentDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div css={loginBox}>
        <p css={loginDesc}>댓글이 궁금하시다면</p>
        <div css={loginButton}>
          <NormalButton text="로그인/회원가입" buttonClick={showLoginModal} variant="filled" wide />
        </div>
      </div>
    </div>
  );
};
