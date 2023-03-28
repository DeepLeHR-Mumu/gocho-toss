import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";

import { wrapper, buttonCSS, divider } from "./style";
import { unauthorizedMEnuDef } from "./type";

export const UnauthorizedMenu: FunctionComponent<unauthorizedMEnuDef> = ({ setOpenedElement }) => {
  const { setModal } = useModal();

  const openLoginModal = () => {
    setOpenedElement(null);
    setModal("loginModal", { button: "close" });
  };

  const openSignUpModal = () => {
    setOpenedElement(null);
    setModal("signUpModal");
  };

  return (
    <ul css={wrapper}>
      <li>
        <button css={buttonCSS} type="button" onClick={openLoginModal}>
          로그인
        </button>
      </li>
      <p css={divider}>/</p>
      <li>
        <button css={buttonCSS} type="button" onClick={openSignUpModal}>
          회원가입
        </button>
      </li>
    </ul>
  );
};
