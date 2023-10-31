import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { SearchBar, DropDown, Profile, Popup } from "shared-ui/deeple-ds";

import { useUserInfo, useDoLogout } from "@/apis/auth";
import { searchFunnelEvent } from "@/ga/search";
import logoWhite from "@/public/image/logo/gocho/white.svg";
import logoBlue from "@/public/image/logo/gocho/blue.svg";
import resumeIconBlue from "@/public/image/resume/myResumeBlue.svg";
import resumeIconWhite from "@/public/image/resume/myResumeWhite.svg";
import { INTERNAL_URL } from "@/constants";
import { useToast } from "@/globalStates";

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
    resumeLink,
  } = getCssObj(isThemeWhite);

  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);

  const { data: userData, isSuccess } = useUserInfo();
  const { mutate: postLogout } = useDoLogout();
  const { setToastMessage } = useToast();

  const openSearchModal = () => {
    router.push(INTERNAL_URL.SEARCH);
    searchFunnelEvent();
    setSearchModal(true);
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const clickResumeLink = () => {
    if (userData?.isPass) {
      router.push(INTERNAL_URL.RESUME);
      return;
    }
    setResumeModal(true);
  };

  const doLogout = () => {
    postLogout(null, {
      onError: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        queryClient.resetQueries();
      },
      onSuccess: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        queryClient.resetQueries();
      },
    });
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
                  <button type="button" onClick={clickResumeLink} css={resumeLink}>
                    <Image src={isThemeWhite ? resumeIconBlue : resumeIconWhite} alt="이력서 아이콘" /> 나의 이력서
                  </button>
                  <Alarm userId={userData.id} isThemeWhite={isThemeWhite} />
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
      {resumeModal && (
        <Popup
          title="본인 인증 후 이력서를 작성해 보세요!"
          description="PASS 인증을 통해 간편하게 이력서를 작성하고, 인증된 이력서로 지원하고 싶은 공고에 바로 지원해 보세요."
          cancel={{
            text: "취소",
            handler: () => {
              setResumeModal(false);
            },
          }}
          confirm={{
            text: "인증하기",
            handler: () => {
              // TODO: PASS 인증 링크 or 로직 추가
              setResumeModal(false);
              setToastMessage("PASS 인증 링크 or 로직 추가");
            },
          }}
        />
      )}
    </>
  );
};
