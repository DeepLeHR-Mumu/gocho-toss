import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { SharedButton } from "shared-ui/business/sharedButton";
import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";
import { COLORS } from "shared-style/color";

import { userGetLocalStoargetItem, userResetLocalStorageItem } from "@/utils";
import { INTERNAL_URL } from "@/constant";

import { cssObj } from "./style";

export const Header: FunctionComponent = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLogined, setIsLogined] = useState<boolean>(false);

  const doLogout = () => {
    userResetLocalStorageItem("USER");
    setIsLogined(false);
    router.push(INTERNAL_URL.LOGIN_URL);
    queryClient.resetQueries();
  };

  useEffect(() => {
    const userObjInfo = userGetLocalStoargetItem("USER");
    setIsLogined(Boolean(userObjInfo));
  }, [isLogined, router]);

  return (
    <header css={cssObj.header}>
      <Link href={INTERNAL_URL.MAIN_URL} passHref css={cssObj.logo}>
        <Image src={colorLogoSrc} alt="고초대졸닷컴" fill />
        <strong css={cssObj.title}>Admin 페이지</strong>
      </Link>
      {!isLogined ? (
        <SharedButton
          onClickHandler={doLogout}
          text="로그아웃"
          size="large"
          radius="round"
          fontColor={COLORS.BLUE_FIRST40}
          backgroundColor={COLORS.GRAY100}
        />
      ) : (
        <Link href={INTERNAL_URL.LOGIN_URL} css={cssObj.loginButton}>
          로그인
        </Link>
      )}
    </header>
  );
};
