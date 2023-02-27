import Link from "next/link";
import { useRouter } from "next/router";
import { MAIN_URL, LOGIN_URL } from "@constant/internalURL";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";

import { Layout } from "@component/layout";
import { useQueryClient } from "@tanstack/react-query";
import { headerWrapper, headerContainer, flexBox, logoCSS, title, loginButton, logoutButton } from "./style";

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
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer}>
          <div css={flexBox}>
            <Link href={MAIN_URL} passHref css={logoCSS}>
              <Image src={colorLogoSrc} alt="고초대졸닷컴" fill />
            </Link>
            <p css={title}>매니저 페이지</p>
          </div>
          <div css={flexBox}>
            {isLogined ? (
              <button type="button" css={logoutButton} onClick={doLogout}>
                로그아웃
              </button>
            ) : (
              <Link href={LOGIN_URL} css={loginButton}>
                로그인
              </Link>
            )}
          </div>
        </div>
      </Layout>
    </header>
  );
};
