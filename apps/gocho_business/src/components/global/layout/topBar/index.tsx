import { FunctionComponent } from "react";
import { container, logo, logoutButton, title, wrapper } from "./style";

export const TopBar: FunctionComponent = () => (
  <header css={wrapper}>
    <div css={container}>
      <div css={logo} />
      <h1 css={title}>고초대졸.business</h1>
    </div>
    <button type="button" css={logoutButton}>
      로그아웃
    </button>
  </header>
);
