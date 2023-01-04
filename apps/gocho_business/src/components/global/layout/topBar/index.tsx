import { FunctionComponent } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import colorLogo from "shared-image/global/deepLeLogo/logoIconColor.svg";
import monoLogo from "shared-image/global/deepLeLogo/logoIconMono.svg";

import { tokenService } from "@/utils/tokenService";
import { useUserState } from "@/globalStates/useUserState";
import { useDoLogout } from "@/apis/auth/useDoLogout";

import { cssObj } from "./style";

export const TopBar: FunctionComponent = () => {
  const { userInfoData, setUserInfoData } = useUserState();
  const { mutate: postLogout } = useDoLogout();
  const queryClient = useQueryClient();

  const doLogoutHandler = () => {
    postLogout(undefined, {
      onSuccess: () => {
        tokenService.removeAllToken();
        setUserInfoData(null);
        queryClient.invalidateQueries();
      },
    });
  };

  const isLogined = userInfoData !== false && userInfoData !== null;

  return (
    <header css={cssObj.wrapper(isLogined)}>
      <div css={cssObj.container}>
        <div css={cssObj.logo}>
          <Image src={isLogined ? colorLogo : monoLogo} alt="고초대졸닷컴 비즈니스" layout="fill" objectFit="contain" />
        </div>
        <h1 css={cssObj.title(isLogined)}>고초대졸.business</h1>
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
