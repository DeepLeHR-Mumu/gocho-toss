import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import bizTextMono from "@/public/images/deepleLogo/bizTextMono.svg";
import bizTextColor from "@/public/images/deepleLogo/bizTextColor.svg";
import { useUserState } from "@/globalStates/useUserState";
import { useDoLogout } from "@/apis/auth/useDoLogout";
import { INTERNAL_URL } from "@/constants/url";
import { signupButtonClickEvent } from "@/ga/auth";

import { cssObj } from "./style";

export const TopBar: FunctionComponent = () => {
  const router = useRouter();
  const { userInfoData, setUserInfoData } = useUserState();
  const { mutate: postLogout } = useDoLogout();
  const queryClient = useQueryClient();

  const doLogoutHandler = () => {
    const afterLogoutActiveFunction = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUserInfoData(null);
      queryClient.invalidateQueries();
      router.push(INTERNAL_URL.LOGIN);
    };

    postLogout(undefined, {
      onError(error) {
        if (error.response?.data.error_code === "EXPIRED_JWT") {
          afterLogoutActiveFunction();
        }
      },
      onSuccess: () => {
        afterLogoutActiveFunction();
      },
    });
  };

  const isLogin = Boolean(userInfoData);

  return (
    <header css={cssObj.wrapper(isLogin)}>
      <div css={cssObj.container}>
        <h1 css={cssObj.title}>
          <Image
            src={isLogin ? bizTextColor : bizTextMono}
            alt="고초대졸닷컴 비즈니스"
            layout="fill"
            objectFit="contain"
          />
        </h1>
      </div>
      {userInfoData ? (
        <SharedButton
          onClickHandler={doLogoutHandler}
          size="medium"
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
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            signupButtonClickEvent();
          }}
        >
          기업회원 가입하기
        </a>
      )}
    </header>
  );
};
