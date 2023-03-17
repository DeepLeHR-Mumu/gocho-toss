import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { LinkButton } from "shared-ui/common/atom/button/linkButton";
import { NormalButton } from "shared-ui/common/atom/button/normalButton";
import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";

import { MAIN_URL, LOGIN_URL } from "@constant/internalURL";

import { cssObj } from "./style";

export const Header: FunctionComponent = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLogined, setIsLogined] = useState<boolean>(false);

  const doLogout = () => {
    localStorage.clear();
    setIsLogined(false);
    queryClient.resetQueries();
  };

  useEffect(() => {
    const isAccessToken = localStorage.getItem("accessToken") !== null;
    setIsLogined(isAccessToken);
  }, [isLogined, router]);

  return (
    <header css={cssObj.header}>
      <Link href={MAIN_URL} passHref css={cssObj.logo}>
        <Image src={colorLogoSrc} alt="고초대졸닷컴" fill />
        <strong css={cssObj.title}>관리자 어드민</strong>
      </Link>
      {isLogined ? (
        <NormalButton buttonClick={doLogout} text="로그아웃" variant="outlined" wide={false} />
      ) : (
        <LinkButton linkTo={LOGIN_URL} text="로그인" variant="filled" wide={false} />
      )}
    </header>
  );
};
