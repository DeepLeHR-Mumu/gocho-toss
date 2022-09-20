import { FunctionComponent, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import colorLogoSrc from "shared-image/global/deepLeLogo/smallColor.svg";
import grayLogoSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import { useUserInfo } from "shared-api/auth";

import { MAIN_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";
import { Profile } from "@component/common/molecule/profile";
import { UnAuthMenu } from "@component/common/molecule/unAuthMenu";
import { menuArr } from "@constant/menuArr";

import { SubMenuButton } from "./component/subMenuButton";
import {
  headerWrapper,
  headerContainer,
  logoCSS,
  navWrapper,
  globalNavBarContainer,
  downIconCSS,
  activeRouter,
  subMenuToggleWrapper,
  searchIcon,
  unifiedSearchWrapper,
  unifiedSearch,
  searchButton,
  flexBox,
  searchDimmed,
} from "./style";

export const Header: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isUnifiedSearch, setIsUnifiedSearch] = useState<boolean>(false);

  const router = useRouter();
  const { pathname } = router;

  const [query, setQuery] = useState("");

  const handleParam = () => {
    return (typeKeyword: ChangeEvent<HTMLInputElement>) => {
      return setQuery(typeKeyword.target.value);
    };
  };

  const preventRefresh = (goNewPage: (event: FormEvent) => void) => {
    return (submitForm: FormEvent) => {
      submitForm.preventDefault();
      goNewPage(submitForm);
    };
  };

  const handleSubmit = preventRefresh(() => {
    router.push({
      pathname: "/search",
      query: { q: query },
    });
  });

  const { isSuccess } = useUserInfo();
  return (
    <header css={headerWrapper}>
      <Layout>
        <div css={headerContainer}>
          <div css={logoCSS}>
            <Link href={MAIN_URL} passHref>
              <Image
                src={pathname === MAIN_URL ? colorLogoSrc : grayLogoSrc}
                alt="고초대졸닷컴"
                objectFit="contain"
                layout="fill"
              />
            </Link>
          </div>

          <nav css={navWrapper}>
            <ul css={globalNavBarContainer}>
              {menuArr.map((menu, index) => {
                return (
                  <li
                    key={`navMenu_${menu.menuTitle}`}
                    css={activeRouter(pathname === menu.menuLink)}
                    onMouseOver={() => {
                      setActiveIndex(index);
                    }}
                    onFocus={() => {
                      setActiveIndex(index);
                    }}
                    onMouseLeave={() => {
                      setActiveIndex(null);
                    }}
                  >
                    {menu.subMenuArr ? (
                      <>
                        {menu.menuTitle}
                        <BsChevronDown css={downIconCSS} />

                        <ul css={subMenuToggleWrapper(activeIndex === index)}>
                          {menu.subMenuArr.map((subMenu) => {
                            return (
                              <SubMenuButton
                                key={subMenu.menuTitle}
                                link={subMenu.menuLink}
                                title={subMenu.menuTitle}
                                setActiveIndex={setActiveIndex}
                              />
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <Link href={menu.menuLink} passHref>
                        {menu.menuTitle}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div css={flexBox}>
              <button
                type="button"
                css={searchIcon}
                onClick={() => {
                  setIsUnifiedSearch((prev) => {
                    return !prev;
                  });
                }}
              >
                {isUnifiedSearch ? <BsXLg /> : <FiSearch />}
              </button>
              {isSuccess ? <Profile /> : <UnAuthMenu />}
            </div>
          </nav>
        </div>
      </Layout>
      <div css={searchDimmed(isUnifiedSearch)} />
      {/* TODO: 다른 페이지에서 검색창과 겹치는 부분 있는지 확인! */}
      <form onSubmit={handleSubmit} css={unifiedSearchWrapper(isUnifiedSearch)}>
        <input css={unifiedSearch} placeholder="궁금한 기업명이나 공고를 검색해보세요" onChange={handleParam} />
        <button type="submit" css={searchButton}>
          <FiSearch />
        </button>
      </form>
    </header>
  );
};
