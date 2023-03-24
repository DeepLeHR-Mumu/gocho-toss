import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";
import { NormalButton } from "shared-ui/common/atom/button";

import { dummyArrCreator } from "shared-util";
import { UnLoginCommentBoxProps } from "./type";
import {
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

export const UnLoginCommentBox: FunctionComponent<UnLoginCommentBoxProps> = ({ setOpenComment }) => {
  const { setCurrentModal } = useModal();

  const showLoginModal = () => {
    setOpenComment(false);
    setCurrentModal("loginModal", { button: "close" });
  };

  return (
    <div>
      <section css={commentContainerBlur}>
        <ul>
          {dummyArrCreator(3).map((value) => {
            return (
              <div key={value}>
                <li>
                  <div css={commentHeader}>
                    <p css={nicknameCSS}>유저닉네임</p>
                  </div>
                  <div css={commentBody}>
                    <div css={commentBox}>
                      <p css={commentTypeCSS}>현재 공고 : 현재공고의 제목입니다.</p>
                      <p css={commentDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda excepturi autem
                        officiis dignissimos,
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div css={commentHeader}>
                    <p css={nicknameCSS}>블러처리된댓글</p>
                  </div>
                  <div css={commentBody}>
                    <div css={commentBox}>
                      <p css={commentTypeCSS}>현재 공고: 의 댓글을 확인하고 싶다면 로그인해주세요.</p>
                      <p css={commentDesc}>
                        블러처리 된 댓글은 임의로 작성된 댓글로, 실제 공고에 달린 댓글이 아닙니다. 로그인하시면 실제
                        댓글을 볼 수 있습니다. 지금 바로 로그인하시고 다른 분들이 작성한 댓글을 확인해보세요!
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
              </div>
            );
          })}
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
