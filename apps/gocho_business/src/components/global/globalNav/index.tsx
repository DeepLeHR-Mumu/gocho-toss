import { FunctionComponent, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import bizTextMono from "@/public/image/deepleLogo/bizTextMono.svg";
import { useDoLogout, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";

import { JD_LINK_ARR, COMPANY_LINK_ARR, USER_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const GlobalNav: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isCompanyActive, setIsCompanyActive] = useState<boolean>(false);
  const [isUserActive, setIsUserActive] = useState<boolean>(false);

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

  const menuUrl = pathname.split("/").join("/");

  return (
    <header css={cssObj.headerWrapper(isManagerLogin)}>
      <div css={cssObj.headerContainer}>
        <div css={cssObj.defaultMenuContainer}>
          <h1 css={cssObj.logo}>
            <Image src={bizTextMono} alt="고초대졸닷컴 비즈니스" fill />
          </h1>
          <nav css={cssObj.navWrapper}>
            {JD_LINK_ARR.map((linkObj) => (
              <Link
                href={linkObj.url}
                key={`navBar${linkObj.name}`}
                css={cssObj.navLink(menuUrl === linkObj.url)}
                passHref
              >
                {linkObj.name}
              </Link>
            ))}
          </nav>
        </div>
        <div css={cssObj.profileWrapper}>
          <button
            css={cssObj.profileButton}
            type="button"
            aria-label={isCompanyActive ? "서브메뉴 열기" : "서브메뉴 닫기"}
            onClick={() => {
              setIsCompanyActive((isPrev) => !isPrev);
            }}
          >
            <div>{userInfoData?.company.name}</div>
            <FiChevronUp css={cssObj.toggleIcon(isCompanyActive)} />
          </button>
          {isCompanyActive && userInfoData && (
            <div css={cssObj.companyMenu}>
              <div css={cssObj.companyProfile}>
                <div css={cssObj.companyLogoBox}>
                  <Image src={userInfoData.company.logoUrl} fill sizes="1" alt="상단 바 기업 로고" />
                </div>
                <div>
                  <strong css={cssObj.companyName}>{userInfoData.company.name}</strong>
                  <p css={cssObj.industry}>{userInfoData.company.industry}</p>
                </div>
              </div>
              {COMPANY_LINK_ARR.map((linkObj) => (
                <Link href={linkObj.url} key={`navBar${linkObj.name}`} css={cssObj.companyMenuLink} passHref>
                  {linkObj.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div css={cssObj.profileWrapper}>
          <button
            css={cssObj.profileButton}
            type="button"
            aria-label={isUserActive ? "서브메뉴 열기" : "서브메뉴 닫기"}
            onClick={() => {
              setIsUserActive((isPrev) => !isPrev);
            }}
          >
            <div css={cssObj.userName}>{userInfoData?.name}</div>
            <FiChevronUp css={cssObj.toggleIcon(isUserActive)} />
          </button>
          {isUserActive && userInfoData && (
            <div css={cssObj.userMenu}>
              {USER_LINK_ARR.map((linkObj) => (
                <Link href={linkObj.url} key={`navBar${linkObj.name}`} css={cssObj.companyMenuLink} passHref>
                  {linkObj.name}
                </Link>
              ))}
              <button type="button" css={cssObj.logoutButton} onClick={doLogoutHandler}>
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
