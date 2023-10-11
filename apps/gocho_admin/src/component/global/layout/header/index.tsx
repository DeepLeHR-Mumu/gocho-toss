import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { SharedButton } from "shared-ui/common/sharedButton";
import colorLogoSrc from "shared-image/global/deeple/smallColor.svg";

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
      {isLogined ? (
        <SharedButton buttonType="fillWhite" width={7} onClickHandler={doLogout} text="로그아웃" />
      ) : (
        <Link href={INTERNAL_URL.LOGIN_URL} css={cssObj.loginButton}>
          로그인
        </Link>
      )}
    </header>
  );
};
