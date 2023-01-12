import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import colorLogo from "shared-image/global/deepLeLogo/logoIconColor.svg";
import monoLogo from "shared-image/global/deepLeLogo/logoIconMono.svg";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { tokenService } from "@/utils/tokenService";
import { useUserState } from "@/globalStates/useUserState";
import { useDoLogout } from "@/apis/auth/useDoLogout";
import { INTERNAL_URL } from "@/constants/url";

import { cssObj } from "./style";

export const TopBar: FunctionComponent = () => {
  const router = useRouter();
  const { userInfoData, setUserInfoData } = useUserState();
  const { mutate: postLogout } = useDoLogout();
  const queryClient = useQueryClient();

  const doLogoutHandler = () => {
    postLogout(undefined, {
      onSuccess: () => {
        tokenService.removeAllToken();
        router.push(INTERNAL_URL.LOGIN);
        setUserInfoData(null);
        queryClient.invalidateQueries();
      },
    });
  };

  const isLogin = Boolean(userInfoData);

  return (
    <header css={cssObj.wrapper(isLogin)}>
      <div css={cssObj.container}>
        <div css={cssObj.logo}>
          <Image src={isLogin ? colorLogo : monoLogo} alt="고초대졸닷컴 비즈니스" layout="fill" objectFit="contain" />
        </div>
        <h1 css={cssObj.title(isLogin)}>고초대졸.business</h1>
      </div>
      {userInfoData ? (
        <SharedButton
          onClickHandler={doLogoutHandler}
          size="small"
          backgroundColor={COLORS.GRAY100}
          borderColor={COLORS.GRAY70}
          text="로그아웃"
          fontColor={COLORS.GRAY10}
          radius="round"
        />
      ) : (
        <a
          css={cssObj.linkButton}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfYgeAv0BREQSPEtgjHO6-1rHh-srF3EDnRHAWL2e2g1PL_Pw/viewform"
        >
          기업회원 가입하기
        </a>
      )}
    </header>
  );
};
