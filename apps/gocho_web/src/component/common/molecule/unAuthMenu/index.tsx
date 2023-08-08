import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";

import { wrapper, buttonCSS } from "./style";

export const UnAuthMenu: FunctionComponent = () => {
  const { setModal } = useModal();

  return (
    <button
      css={wrapper}
      type="button"
      onClick={() => {
        setModal("loginModal", { button: "close" });
      }}
    >
      <div css={buttonCSS}>로그인 / 회원가입</div>
    </button>
  );
};
