import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useUserInfo } from "@/api/auth/useUserInfo";
import { userInfoKeyObj } from "@/constants/queryKeyFactory/user/infoKeyObj";

import { container, logo, logoutButton, signUpButton, title, wrapper } from "./style";

export const TopBar: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const { isSuccess } = useUserInfo();

  const doLogoutHandler = () => {
    localStorage.clear();
    queryClient.invalidateQueries(userInfoKeyObj.userInfo);
  };

  return (
    <header css={wrapper}>
      <div css={container}>
        <div css={logo} />
        <h1 css={title}>고초대졸.business</h1>
      </div>
      {isSuccess ? (
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
