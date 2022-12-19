import { FunctionComponent } from "react";

import { useUserState } from "@/globalStates/useUserState";

import { container, logo, logoutButton, signUpButton, title, wrapper } from "./style";

export const TopBar: FunctionComponent = () => {
  const { useInfoData, setUseInfoData } = useUserState();

  const doLogoutHandler = () => {
    localStorage.clear();
    setUseInfoData(null);
  };

  return (
    <header css={wrapper}>
      <div css={container}>
        <div css={logo} />
        <h1 css={title}>고초대졸.business</h1>
      </div>
      {useInfoData ? (
        <button type="button" css={logoutButton} onClick={doLogoutHandler}>
          로그아웃
        </button>
      ) : (
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfYgeAv0BREQSPEtgjHO6-1rHh-srF3EDnRHAWL2e2g1PL_Pw/viewform"
          css={signUpButton}
          rel="noreferrer"
        >
          기업회원 가입하기
        </a>
      )}
    </header>
  );
};
