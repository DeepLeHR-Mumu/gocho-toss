import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { SearchBar, DropDown, Profile } from "shared-ui/deeple-ds";

import { useUserInfo, useDoLogout } from "@/apis/auth";
import { searchFunnelEvent } from "@/ga/search";
import logoWhite from "@/public/image/logo/gocho/white.svg";
import logoBlue from "@/public/image/logo/gocho/blue.svg";
import { INTERNAL_URL } from "@/constants";

import { SearchModal } from "../../modal/SearchModal";
import { LoginModal } from "../../modal/LoginModal";
import { Layout } from "../../Layout";
import { Alarm } from "./component/Alarm";
import { THEME_WHITE_PAGES } from "./constant";
import { getCssObj } from "./style";

export const GlobalNavigationBar = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const isThemeWhite = useMemo(() => THEME_WHITE_PAGES.some((url) => router.pathname.includes(url)), [router.pathname]);

  const {
    wrapper,
    titleArea,
    logoWrapper,
    searchBarWrapper,
    navigationArea,
    navigationWrapper,
    menu,
    etcWrapper,
    businessServiceButton,
    loginButton,
    alarmIcon,
  } = getCssObj(isThemeWhite);

  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const { data: userData, isSuccess } = useUserInfo();
  const { mutate: postLogout } = useDoLogout();

  const openSearchModal = () => {
    router.push(INTERNAL_URL.SEARCH);
    searchFunnelEvent();
    setSearchModal(true);
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const doLogout = () => {
    postLogout(null);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.resetQueries();
  };

  return (
    <>
      <header css={wrapper}>
        <Layout>
          <div css={titleArea}>
            <Link href={INTERNAL_URL.MAIN} css={logoWrapper}>
              <Image src={isThemeWhite ? logoBlue : logoWhite} alt="고초대졸_로고" />
            </Link>
            <div css={searchBarWrapper}>
              <SearchBar
                maxLength={0}
                onClick={() => {
                  openSearchModal();
                }}
                color={isThemeWhite ? "gray" : undefined}
              />
            </div>
          </div>
          <div css={navigationArea}>
            <nav>
              <ul css={navigationWrapper}>
                <li css={menu(router.pathname.includes(INTERNAL_URL.JD))}>
                  <Link href={INTERNAL_URL.JD}>채용공고</Link>
                </li>
                <li css={menu(router.pathname.includes(INTERNAL_URL.COMPANY))}>
                  <Link href={INTERNAL_URL.COMPANY}>기업정보</Link>
                </li>
                {/* <li css={menu(router.pathname.includes(INTERNAL_URL.COMMUNITY))}> */}
                {/*  <Link href={INTERNAL_URL.COMMUNITY}>커뮤니티</Link> */}
                {/* </li> */}
              </ul>
            </nav>
            <div css={etcWrapper}>
              <a
                href="https://blog.gochodaejol.com/?utm_source=gochodaejoldotcom&utm_medium=GNB"
                target="_blank"
                rel="noreferrer"
                css={businessServiceButton}
              >
                블로그
              </a>
              <a
                href="https://gocho.biz/?utm_source=gochodaejoldotcom&utm_medium=GNB"
                target="_blank"
                rel="noreferrer"
                css={businessServiceButton}
              >
                기업서비스
              </a>
              {isSuccess ? (
                <>
                  <Alarm userId={userData.id} css={alarmIcon} />
                  <DropDown
                    customTitle={<Profile src={userData.image} size={40} altText={`${userData.nickname} 유저 로고`} />}
                    menu={{
                      width: 180,
                      options: [
                        {
                          content: (
                            <Link
                              href={{
                                pathname: INTERNAL_URL.MYPAGE,
                                query: { type: "profile" },
                              }}
                            >
                              프로필 관리
                            </Link>
                          ),
                        },
                        {
                          content: (
                            <Link
                              href={{
                                pathname: INTERNAL_URL.MYPAGE,
                                query: { type: "account" },
                              }}
                            >
                              계정 관리
                            </Link>
                          ),
                        },
                        {
                          content: (
                            <Link
                              href={{
                                pathname: INTERNAL_URL.MYPAGE,
                                query: { type: "bookmark" },
                              }}
                            >
                              북마크
                            </Link>
                          ),
                        },
                        {
                          content: (
                            <Link
                              href={{
                                pathname: INTERNAL_URL.MYPAGE,
                                query: { type: "alarm" },
                              }}
                            >
                              알림 설정
                            </Link>
                          ),
                        },
                      ],
                      footer: { content: "로그아웃", onClick: doLogout },
                    }}
                    menuConfig={{
                      closeAfterClickEvent: true,
                    }}
                  />
                </>
              ) : (
                <button
                  type="button"
                  css={loginButton}
                  onClick={() => {
                    openLoginModal();
                  }}
                >
                  로그인/회원가입
                </button>
              )}
            </div>
          </div>
        </Layout>
      </header>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
      {searchModal && (
        <SearchModal
          close={() => {
            setSearchModal(false);
          }}
        />
      )}
    </>
  );
};
