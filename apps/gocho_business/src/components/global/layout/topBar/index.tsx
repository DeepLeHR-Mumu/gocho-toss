import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import bizTextMono from "@/public/image/deepleLogo/bizTextMono.svg";
import bizTextColor from "@/public/image/deepleLogo/bizTextColor.svg";
import { useDoLogout, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { signupButtonClickEvent } from "@/ga";

import { cssObj } from "./style";

export const TopBar: FunctionComponent = () => {
  const router = useRouter();
  const { data: userInfoData, isSuccess: isManagerLogin } = useManagerProfile();
  const { mutate: postLogout } = useDoLogout();
  const queryClient = useQueryClient();

  const doLogoutHandler = () => {
    const afterLogoutActiveFunction = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
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

  return (
    <header css={cssObj.wrapper(isManagerLogin)}>
      <div css={cssObj.container}>
        <h1 css={cssObj.title}>
          <Image src={isManagerLogin ? bizTextColor : bizTextMono} alt="고초대졸닷컴 비즈니스" fill />
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
          href="https://tally.so/r/wL9e5J"
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
