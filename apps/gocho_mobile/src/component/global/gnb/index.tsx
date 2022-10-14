import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiSearch, FiMenu, FiArrowLeft, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";
import { globalSearchEvent } from "shared-ga/search";
import { MAIN_URL } from "shared-constant/internalURL";
import { useUserInfo } from "shared-api/auth";

import { Layout } from "@component/layout";

import { AuthorizedMenu } from "./component/authorizedMenu";
import { UnauthorizedMenu } from "./component/unauthorizedMenu";
import { SubMenuButton } from "./component/subMenuButton";
import { menuArr } from "./constant";
import { openedElementDef } from "./type";
import {
  headerWrapper,
  headerContainer,
  MainLogoBox,
  icon,
  unifiedSearchWrapper,
  backIcon,
  unifiedSearch,
  searchButton,
  navContainer,
  menuContainer,
  menuCategory,
  subMenuArr,
  iconBox,
} from "./style";

export const GNB: FunctionComponent = () => {
  const [openedElement, setOpenedElement] = useState<openedElementDef>(null);
  const [query, setQuery] = useState("");

  const { isSuccess } = useUserInfo();

  const router = useRouter();

  const handleParam = (typeKeyword: ChangeEvent<HTMLInputElement>) => {
    return setQuery(typeKeyword.target.value);
  };

  useEffect(() => {
    setOpenedElement(null);
  }, [router]);

  const preventRefresh = (goNewPage: (event: FormEvent) => void) => {
    return (submitForm: FormEvent) => {
      submitForm.preventDefault();
      goNewPage(submitForm);
    };
  };

  const handleSubmit = preventRefresh(() => {
    globalSearchEvent(query);
    router.push({
      pathname: "/search",
      query: { q: query, page: 1 },
    });
  });

  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer(openedElement)}>
          <Link href={MAIN_URL} passHref>
            <a css={MainLogoBox}>
              <Image src={colorLogoSrc} alt="고초대졸닷컴" objectFit="contain" layout="fill" />
            </a>
          </Link>
          <div css={iconBox}>
            <button
              type="button"
              css={icon}
              onClick={() => {
                setOpenedElement("통합검색");
              }}
              aria-label="통합검색 열기"
            >
              <FiSearch />
            </button>
            <button
              type="button"
              css={icon}
              aria-label={openedElement === "메뉴" ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => {
                setOpenedElement((prev) => {
                  return prev === "메뉴" ? null : "메뉴";
                });
              }}
            >
              {openedElement === "메뉴" && <FiX />}
              {openedElement === null && <FiMenu />}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} css={unifiedSearchWrapper(openedElement)}>
          <button
            css={backIcon}
            type="button"
            onClick={() => {
              if (router.pathname !== MAIN_URL) {
                router.back();
              }
              setOpenedElement(null);
            }}
            aria-label="이전 메뉴 돌아가기"
          >
            <FiArrowLeft />
          </button>

          <input css={unifiedSearch} placeholder="궁금한 기업/공고를 검색해보세요" onChange={handleParam} />
          <button type="submit" css={searchButton} aria-label="통합 검색하기">
            <FiSearch />
          </button>
        </form>
      </Layout>

      <nav css={navContainer(openedElement === "메뉴")}>
        <Layout>
          <ul css={menuContainer}>
            {menuArr.map((menu) => {
              return (
                <li key={`navMenu_${menu.menuTitle}`}>
                  <Link
                    href={{
                      pathname: menu.menuLink,
                      query: { order: "recent", page: 1 },
                    }}
                  >
                    <a css={menuCategory}>{menu.menuTitle}</a>
                  </Link>
                  <ul css={subMenuArr}>
                    {menu.subMenuArr.map((subMenu) => {
                      return (
                        <SubMenuButton
                          key={subMenu.menuTitle}
                          link={subMenu.menuLink}
                          title={subMenu.menuTitle}
                          setOpenedElement={setOpenedElement}
                        />
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          {isSuccess ? (
            <AuthorizedMenu setOpenedElement={setOpenedElement} />
          ) : (
            <UnauthorizedMenu setOpenedElement={setOpenedElement} />
          )}
        </Layout>
      </nav>
    </header>
  );
};