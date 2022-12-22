import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { tokenService } from "@/util/tokenService";
import { useUserState } from "@/globalStates/useUserState";

import { cssObj } from "./style";

export const TopBar: FunctionComponent = () => {
  const { userInfoData, setUserInfoData } = useUserState();
  const queryClient = useQueryClient();

  const doLogoutHandler = () => {
    tokenService.removeAllToken();
    setUserInfoData(null);
    queryClient.invalidateQueries();
  };

  return (
    <header css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <div css={cssObj.logo} />
        <h1 css={cssObj.title}>고초대졸.business</h1>
      </div>
      {userInfoData ? (
        <button type="button" css={cssObj.logoutButton} onClick={doLogoutHandler}>
          로그아웃
        </button>
      ) : (
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfYgeAv0BREQSPEtgjHO6-1rHh-srF3EDnRHAWL2e2g1PL_Pw/viewform"
          css={cssObj.signUpButton}
          rel="noreferrer"
        >
          기업회원 가입하기
        </a>
      )}
    </header>
  );
};
