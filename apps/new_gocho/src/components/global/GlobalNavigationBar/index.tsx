import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

import { SearchBar, DropDown, Profile } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";
import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/pages/constants";
import logoWhite from "@/public/logoWhite.svg";
import logoBlue from "@/public/logoBlue.svg";
import { SearchModal } from "../../modal/SearchModal";
import { LoginModal } from "../../modal/LoginModal";

import { Layout } from "../../Layout";

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
    mobileIcon,
    searchBarWrapper,
    navigationArea,
    navigationWrapper,
    selected,
    etcWrapper,
    businessServiceButton,
    loginButton,
    alarmIcon,
  } = getCssObj(isThemeWhite);

  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const { isMobile } = useGetDeviceType();

  const { data: userData, isSuccess } = useUserProfile();

  const openSearchModal = () => {
    router.push(INTERNAL_URL.SEARCH);
    setSearchModal(true);
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const doLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.resetQueries();
  };

  return (
    <>
      <header css={wrapper}>
        <Layout>
          {isMobile ? (
            <div css={titleArea}>
              <Link href={INTERNAL_URL.MAIN} css={logoWrapper}>
                <Image src={isThemeWhite ? logoBlue : logoWhite} alt="고초대졸_로고" />
              </Link>
              <div>
                <FiSearch
                  css={mobileIcon}
                  onClick={() => {
                    openSearchModal();
                  }}
                />
                <FiBell css={mobileIcon} />
                <FiUser
                  css={mobileIcon}
                  onClick={() => {
                    openLoginModal();
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <div css={titleArea}>
                <Link href={INTERNAL_URL.MAIN} css={logoWrapper}>
                  <Image src={isThemeWhite ? logoBlue : logoWhite} alt="고초대졸_로고" />
                </Link>
                <div css={searchBarWrapper}>
                  <SearchBar
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
                    <li css={router.pathname.includes(INTERNAL_URL.JDS) && selected}>
                      <Link href={INTERNAL_URL.JDS_LIST}>채용공고</Link>
                    </li>
                    <li css={router.pathname.includes(INTERNAL_URL.COMPANY) && selected}>
                      <Link href={INTERNAL_URL.COMPANY}>기업정보</Link>
                    </li>
                    <li css={router.pathname.includes(INTERNAL_URL.COMMUNITY) && selected}>
                      <Link href={INTERNAL_URL.COMMUNITY}>커뮤니티</Link>
                    </li>
                  </ul>
                </nav>
                <div css={etcWrapper}>
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
                      <FiBell css={alarmIcon} />
                      <DropDown
                        customTitle={<Profile src={userData.image} size={40} />}
                        menu={{
                          width: 180,
                          closeAfterClickEvent: true,
                          options: [
                            {
                              content: (
                                <Link
                                  href={{
                                    pathname: "/mypage",
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
                                    pathname: "/mypage",
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
                                    pathname: "/mypage",
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
                                    pathname: "/mypage",
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
            </>
          )}
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
