import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { wrapper, buttonCSS, divider } from "./style";
import { unAuthedMenuDef } from "./type";

export const UnAuthedMenu: FunctionComponent<unAuthedMenuDef> = ({ setOpenedElement }) => {
  const { setCurrentModal } = useModal();

  const openLoginModal = () => {
    setOpenedElement(null);
    setCurrentModal("loginModal");
  };

  const openSignUpModal = () => {
    setOpenedElement(null);
    setCurrentModal("signUpModal");
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
