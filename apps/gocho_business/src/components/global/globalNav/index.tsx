import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FiChevronUp, FiBell } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import bizTextMono from "@/public/image/deepleLogo/bizTextMono.svg";
import { useAlarmArr, useDoLogout, useManagerProfile, useReadAlarm } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { homeAlarmClickEvent, homeCompanyInfoClickEvent, homeProfileInfoClickEvent } from "@/ga";
import { alarmCategoryToLink } from "@/pages/alarm/list/util";

import { JD_LINK_ARR, COMPANY_LINK_ARR, USER_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const GlobalNav: FunctionComponent = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { pathname } = router;

  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(false);
  const [isCompanyActive, setIsCompanyActive] = useState<boolean>(false);
  const [isUserActive, setIsUserActive] = useState<boolean>(false);
  const alarmDropdownMenuRef = useRef<HTMLDivElement>(null);
  const companyDropdownMenuRef = useRef<HTMLDivElement>(null);
  const userDropdownMenuRef = useRef<HTMLDivElement>(null);

  const { data: userInfoData } = useManagerProfile();
  const { data: alarmArrObj } = useAlarmArr({ managerId: userInfoData?.id, size: 15 });
  const { mutate: postLogout } = useDoLogout();
  const { mutate: readAlarmMutate } = useReadAlarm();

  const doLogoutHandler = () => {
    const afterLogoutActiveFunction = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      queryClient.invalidateQueries();
      router.push(INTERNAL_URL.LOGIN);
    };

    postLogout(null, {
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

  const profileMenuHandler = (clickedMenu: string) => {
    setIsAlarmActive((prev) => (clickedMenu === "alarm" ? !prev : false));
    setIsCompanyActive((prev) => (clickedMenu === "company" ? !prev : false));
    setIsUserActive((prev) => (clickedMenu === "user" ? !prev : false));
  };

  useEffect(() => {
    profileMenuHandler("");
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (alarmDropdownMenuRef.current && !alarmDropdownMenuRef.current.contains(event.target as Node)) {
        setIsAlarmActive(false);
      }
      if (companyDropdownMenuRef.current && !companyDropdownMenuRef.current.contains(event.target as Node)) {
        setIsCompanyActive(false);
      }
      if (userDropdownMenuRef.current && !userDropdownMenuRef.current.contains(event.target as Node)) {
        setIsUserActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (alarmArrObj && userInfoData?.id && isAlarmActive) {
      readAlarmMutate({ managerId: userInfoData.id, category: "all" });
    }
  }, [alarmArrObj, readAlarmMutate, userInfoData?.id, isAlarmActive]);

  const menuUrl = pathname.split("/").join("/");

  return (
    <header css={cssObj.headerWrapper}>
      <div css={cssObj.headerContainer}>
        <div css={cssObj.defaultMenuContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.logo}>
            <Image src={bizTextMono} alt="고초대졸닷컴 비즈니스" fill />
          </Link>
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
        <div css={cssObj.profileWrapper} ref={alarmDropdownMenuRef}>
          <button
            type="button"
            css={cssObj.alarmButton}
            onClick={() => {
              homeAlarmClickEvent();
              profileMenuHandler("alarm");
            }}
          >
            {/* TODO 테스트 해봐야 함. */}
            {alarmArrObj?.alarmDataArr.findIndex((alarm) => !alarm.isRead) !== -1 && <div css={cssObj.redDot} />}
            <FiBell />
          </button>
          {isAlarmActive && (
            <div css={cssObj.alarmMenu}>
              {alarmArrObj?.alarmDataArr.length !== 0 ? (
                alarmArrObj?.alarmDataArr.map((alarm) => (
                  <div key={`alarm${alarm.id}`}>
                    <Link href={alarmCategoryToLink(alarm.category)}>
                      <div css={cssObj.alarmContainer}>
                        <p css={cssObj.infoType(alarm.isRead)}>{alarm.category}</p>
                        <strong css={cssObj.infoTitle(alarm.isRead)}>{alarm.description}</strong>
                      </div>
                    </Link>
                    <div css={cssObj.contour} />
                  </div>
                ))
              ) : (
                <p css={cssObj.noAlarmDesc}>
                  수신한 알림이 없습니다. <br />
                  받은 알림은 90일 후 자동 삭제됩니다.
                </p>
              )}
            </div>
          )}
        </div>
        <div css={cssObj.profileWrapper} ref={companyDropdownMenuRef}>
          <button
            css={cssObj.profileButton}
            type="button"
            aria-label={isCompanyActive ? "서브메뉴 열기" : "서브메뉴 닫기"}
            onClick={() => {
              homeCompanyInfoClickEvent();
              profileMenuHandler("company");
            }}
          >
            <div css={cssObj.companyProfileButton}>{userInfoData?.company.name}</div>
            <FiChevronUp css={cssObj.toggleIcon(isCompanyActive)} />
          </button>
          {isCompanyActive && userInfoData && (
            <div css={cssObj.companyMenu}>
              <div css={cssObj.companyProfile}>
                <div css={cssObj.companyLogoBox}>
                  <Image
                    src={userInfoData.company.logoUrl || defaultCompanyLogo}
                    fill
                    sizes="1"
                    alt="상단 바 기업 로고"
                  />
                </div>
                <div>
                  <strong css={cssObj.companyName}>{userInfoData.company.name}</strong>
                  <p css={cssObj.industry}>{userInfoData.company.industry}</p>
                </div>
              </div>
              {userInfoData.status.name !== "인증완료" ? (
                <Link href={INTERNAL_URL.COMPANY_AUTH} css={cssObj.companyMenuLink} passHref>
                  기업 회원 인증
                </Link>
              ) : (
                COMPANY_LINK_ARR.map((linkObj) => (
                  <Link href={linkObj.url} key={`navBar${linkObj.name}`} css={cssObj.companyMenuLink} passHref>
                    {linkObj.name}
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
        <div css={cssObj.profileWrapper} ref={userDropdownMenuRef}>
          <button
            css={cssObj.profileButton}
            type="button"
            aria-label={isUserActive ? "서브메뉴 열기" : "서브메뉴 닫기"}
            onClick={() => {
              homeProfileInfoClickEvent();
              profileMenuHandler("user");
            }}
          >
            <div>{userInfoData?.name} 님</div>
            <FiChevronUp css={cssObj.toggleIcon(isUserActive)} />
          </button>
          {isUserActive && userInfoData && (
            <div css={cssObj.userMenu}>
              <div css={cssObj.userInfoContainer}>
                <p css={cssObj.userName}>{userInfoData?.name} 님</p>
                <p css={cssObj.userDepartment}>{userInfoData?.department}</p>
              </div>
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
