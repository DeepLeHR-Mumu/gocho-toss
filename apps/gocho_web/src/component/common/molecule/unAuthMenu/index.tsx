import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { wrapper, buttonCSS } from "./style";

export const UnAuthMenu: FunctionComponent = () => {
  const { setCurrentModal } = useModal();

  return (
    <button
      css={wrapper}
      type="button"
      onClick={() => {
        setCurrentModal("loginModal", { button: "close" });
      }}
    >
      <div css={buttonCSS}>로그인 /</div>
      <div css={buttonCSS}> 회원가입</div>
    </button>
  );
};
