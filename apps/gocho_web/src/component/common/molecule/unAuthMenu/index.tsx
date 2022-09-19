import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { wrapper, buttonCSS } from "./style";

export const UnAuthMenu: FunctionComponent = () => {
  const { setCurrentModal } = useModal();

  const openLoginModal = () => {
    setCurrentModal("loginModal", { button: "close" });
  };

  const openSignUpModal = () => {
    setCurrentModal("signUpModal");
  };

  return (
    <ul css={wrapper}>
      <li>
        <button css={buttonCSS} type="button" onClick={openLoginModal}>
          로그인
        </button>
      </li>
      <li>
        <button css={buttonCSS} type="button" onClick={openSignUpModal}>
          회원가입
        </button>
      </li>
    </ul>
  );
};
